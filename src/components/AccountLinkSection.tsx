import { useState } from "react";
import {
  Mail,
  LogOut,
  ShieldCheck,
  Loader2,
  CheckCircle2,
  Unlink,
} from "lucide-react";
import { Link } from "@/lib/router-shim";
import { Button } from "@/components/ui/button";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { useAuth } from "@/hooks/useAuth";
import { supabase } from "@/integrations/supabase/client";
import { unlinkAccount } from "@/lib/accountUnlink";
import { toast } from "sonner";

/**
 * Bloc "Guarda el teu progrés" que apareix a Configuració, just sota el nom.
 *
 *  - Si l'usuari NO ha iniciat sessió: mostra un missatge curt explicant
 *    el benefici i un botó que porta a /auth.
 *  - Si SÍ que ha iniciat sessió: mostra l'email vinculat, un botó per
 *    tancar sessió i un botó per DESVINCULAR el correu mantenint el
 *    progrés local (device_id).
 *
 * No afecta la lògica del joc (que continua funcionant amb device_id).
 */
export function AccountLinkSection() {
  const { user, ready } = useAuth();
  const [signingOut, setSigningOut] = useState(false);
  const [unlinking, setUnlinking] = useState(false);

  if (!ready) {
    return (
      <div className="flex items-center gap-2 text-[11px] text-muted-foreground">
        <Loader2 className="w-3.5 h-3.5 animate-spin" />
        Carregant…
      </div>
    );
  }

  async function handleSignOut() {
    setSigningOut(true);
    try {
      await supabase.auth.signOut();
      toast.success("Sessió tancada");
    } catch (e) {
      const msg = e instanceof Error ? e.message : "Error desconegut";
      toast.error(`No s'ha pogut tancar la sessió: ${msg}`);
    } finally {
      setSigningOut(false);
    }
  }

  async function handleUnlink() {
    setUnlinking(true);
    try {
      await unlinkAccount();
      toast.success(
        "Correu desvinculat. El teu progrés es manté en este dispositiu.",
      );
    } catch (e) {
      const msg = e instanceof Error ? e.message : "Error desconegut";
      toast.error(`No s'ha pogut desvincular: ${msg}`);
    } finally {
      setUnlinking(false);
    }
  }

  if (user) {
    return (
      <div className="rounded-md border border-team-nos/40 bg-team-nos/5 p-2.5 flex flex-col gap-2">
        <div className="flex items-start gap-2">
          <CheckCircle2 className="w-4 h-4 text-team-nos shrink-0 mt-0.5" />
          <div className="flex-1 min-w-0">
            <div className="text-[11px] font-medium text-foreground">
              Progrés vinculat
            </div>
            <div className="text-[10px] text-muted-foreground truncate">
              {user.email}
            </div>
          </div>
        </div>
        <p className="text-[10px] text-muted-foreground">
          Si canvies de dispositiu, inicia sessió amb aquest correu per
          recuperar les teues estadístiques i partides.
        </p>
        <div className="flex flex-col gap-1.5">
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={handleSignOut}
            disabled={signingOut || unlinking}
            className="border-foreground/30"
          >
            {signingOut ? (
              <Loader2 className="w-3.5 h-3.5 mr-1.5 animate-spin" />
            ) : (
              <LogOut className="w-3.5 h-3.5 mr-1.5" />
            )}
            Tancar sessió
          </Button>

          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button
                type="button"
                variant="ghost"
                size="sm"
                disabled={signingOut || unlinking}
                className="text-destructive hover:text-destructive hover:bg-destructive/10"
              >
                {unlinking ? (
                  <Loader2 className="w-3.5 h-3.5 mr-1.5 animate-spin" />
                ) : (
                  <Unlink className="w-3.5 h-3.5 mr-1.5" />
                )}
                Desvincular correu
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Desvincular el correu?</AlertDialogTitle>
                <AlertDialogDescription asChild>
                  <div className="space-y-2 text-sm">
                    <p>
                      Trencarem la vinculació entre el teu compte (
                      <span className="font-medium">{user.email}</span>) i
                      aquest dispositiu. Després es tancarà la sessió.
                    </p>
                    <p>
                      <span className="font-medium text-foreground">
                        El teu progrés es conserva
                      </span>{" "}
                      en aquest dispositiu (estadístiques, perfil de bot,
                      partides). Pots tornar a vincular un correu en
                      qualsevol moment.
                    </p>
                    <p className="text-muted-foreground">
                      Si desinstal·les l'app o canvies de dispositiu sense
                      tornar a vincular un correu, el progrés es perdrà.
                    </p>
                  </div>
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel disabled={unlinking}>
                  Cancel·lar
                </AlertDialogCancel>
                <AlertDialogAction
                  onClick={handleUnlink}
                  disabled={unlinking}
                  className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
                >
                  {unlinking ? (
                    <Loader2 className="w-4 h-4 mr-1.5 animate-spin" />
                  ) : null}
                  Sí, desvincular
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-md border border-primary/30 bg-primary/5 p-2.5 flex flex-col gap-2">
      <div className="flex items-start gap-2">
        <ShieldCheck className="w-4 h-4 text-primary shrink-0 mt-0.5" />
        <div className="flex-1">
          <div className="text-[11px] font-medium text-foreground">
            Guarda el teu progrés
          </div>
          <p className="text-[10px] text-muted-foreground mt-0.5">
            Vincula un correu electrònic per no perdre les teues
            estadístiques si canvies de dispositiu o desinstal·les l'app.
          </p>
        </div>
      </div>
      <Button
        type="button"
        variant="outline"
        size="sm"
        disabled
        aria-disabled="true"
        className="w-full border-primary/40 text-primary hover:bg-primary/10 opacity-60 cursor-not-allowed"
      >
        <Mail className="w-3.5 h-3.5 mr-1.5" />
        Vincular correu electrònic (pròximament)
      </Button>
    </div>
  );
}