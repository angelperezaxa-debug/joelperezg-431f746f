import { useNavigate } from "@/lib/router-shim";
import { Button } from "@/components/ui/button";
import { LogOut, BookOpen } from "lucide-react";
import { useT } from "@/i18n/useT";

const Regles = () => {
  const navigate = useNavigate();
  const t = useT();

  return (
    <main className="min-h-screen flex flex-col items-center px-4 py-6 pb-12">
      <div className="w-full max-w-lg flex flex-col gap-4">
        <div className="flex justify-end">
          <Button
            onClick={() => navigate("/")}
            size="sm"
            variant="outline"
            className="h-8 w-8 p-0 border-foreground/80 text-foreground hover:bg-foreground/10"
            aria-label={t("common.back_home")}
            title={t("common.back_home")}
          >
            <LogOut className="w-4 h-4" />
          </Button>
        </div>

        <header className="text-center">
          <h1 className="font-title font-black italic text-gold text-2xl text-center pr-1.5">Regles del Truc</h1>
          <p className="mt-1 text-xs text-muted-foreground">Truc Valencià — Regles completes</p>
        </header>

        {/* Índex */}
        <nav className="bg-card/50 rounded-lg p-3 border border-border">
          <p className="font-display font-bold text-gold text-sm mb-2">Índex</p>
          <ul className="text-xs space-y-1.5">
            <li><a href="#objectiu" className="text-foreground/80 hover:text-gold underline underline-offset-2">Objectiu del joc</a></li>
            <li><a href="#valor-cartes" className="text-foreground/80 hover:text-gold underline underline-offset-2">Valor de les cartes</a></li>
            <li><a href="#envit" className="text-foreground/80 hover:text-gold underline underline-offset-2">L'Envit</a></li>
            <li><a href="#truc" className="text-foreground/80 hover:text-gold underline underline-offset-2">El Truc</a></li>
            <li><a href="#termes" className="text-foreground/80 hover:text-gold underline underline-offset-2">Termes comuns</a></li>
          </ul>
        </nav>

        <div className="flex flex-col gap-6 text-sm text-foreground/90 leading-relaxed">

          {/* Introducció */}
          <section>
            <h2 className="font-display font-bold text-gold text-base mb-1">Introducció</h2>
            <p>
              El Truc Valencià és un joc de cartes tradicional del País Valencià que es juga amb la baralla espanyola
              de 40 cartes (sense vuits ni nous). Es juga per parelles (2 contra 2), on els companys s'asseuen
              enfrontats a la taula.
            </p>
          </section>

          {/* Objectiu */}
          <section id="objectiu" className="scroll-mt-4">
            <h2 className="font-display font-bold text-gold text-base mb-1">Objectiu del joc</h2>
            <p>
              Guanyar la partida acumulant <strong>pedres</strong> (punts). Una partida es juga a <strong>24 pedres</strong> (dues
              cames de 12) o a <strong>18 pedres</strong> (dues cames de 9), segons la configuració. Cada
              cama es marca al marcador i la parella que primer completa les dues cames guanya.
            </p>
          </section>

          {/* Repartiment */}
          <section>
            <h2 className="font-display font-bold text-gold text-base mb-1">Repartiment</h2>
            <p>
              Es reparteixen <strong>3 cartes</strong> a cada jugador. El jugador que té la <em>mà</em> (primer torn)
              va rotant en sentit antihorari a cada mà.
            </p>
          </section>

          {/* Valor de les cartes */}
          <section id="valor-cartes" className="scroll-mt-4">
            <h2 className="font-display font-bold text-gold text-base mb-1">Valor de les cartes (de major a menor)</h2>
            <div className="bg-card/50 rounded-lg p-3 border border-border">
              <ol className="list-decimal list-inside space-y-0.5 text-xs">
                <li><strong>As d'Espases</strong> (l'1 d'espases) — la carta més alta</li>
                <li><strong>As de Bastos</strong> (l'1 de bastos)</li>
                <li><strong>Set d'Espases</strong></li>
                <li><strong>Set d'Oros</strong></li>
                <li><strong>Tresos</strong> (qualsevol palo)</li>
                <li><strong>Sets</strong> restants (copes i bastos)</li>
                <li><strong>Sisos</strong> (qualsevol palo)</li>
                <li><strong>Cincs</strong> (qualsevol palo)</li>
                <li><strong>Quatres</strong> (qualsevol palo)</li>
              </ol>
            </div>
          </section>

          {/* Desenvolupament d'una ronda */}
          <section>
            <h2 className="font-display font-bold text-gold text-base mb-1">Desenvolupament d'una mà</h2>
            <p>
              Cada mà té fins a <strong>3 basses</strong> (rondes). A cada bassa, cada jugador tira una carta.
              Guanya la bassa qui tira la carta més alta. Si hi ha empat, guanya qui haja guanyar la primera bassa.
            </p>
            <p className="mt-2">
              La parella que guanya <strong>2 de 3 basses</strong> s'endú la mà. Si la primera bassa és empat
              (<em>parda</em>), guanya qui guanye la segona. Si les tres basses són empat, guanya la mà.
            </p>
          </section>

          {/* Envit */}
          <section id="envit" className="scroll-mt-4">
            <h2 className="font-display font-bold text-gold text-base mb-1">L'Envit</h2>
            <p>
              Abans de jugar la primera carta, qualsevol jugador pot cantar <strong>«Envit!»</strong>.
              L'envit és una aposta paral·lela sobre el valor de les cartes del mateix palo.
            </p>
            <h3 className="font-display font-bold text-sm mt-2 mb-1">Com es calcula l'envit</h3>
            <p>
              Es sumen els valors de les <strong>dues cartes del mateix palo</strong> amb major valor,
              afegint-hi 20. Les figures (10, 11, 12) valen 0. Si no tens dues cartes del mateix palo,
              el teu envit és el valor de la carta més alta.
            </p>
            <div className="bg-card/50 rounded-lg p-3 border border-border mt-2">
              <p className="text-xs"><strong>Exemple:</strong> Si tens el 7 d'oros, el 5 d'oros i un 3 de copes →
                Envit = 20 + 7 + 5 = <strong>32</strong>.</p>
              <p className="text-xs mt-1"><strong>Exemple:</strong> Si tens el Rei d'espases, la Sota d'espases i el 3 de copes →
                Envit = 20 + 0 + 0 = <strong>20</strong> (figures valen 0).</p>
            </div>
            <h3 className="font-display font-bold text-sm mt-2 mb-1">Escala d'envit</h3>
            <ul className="list-disc list-inside text-xs space-y-0.5">
              <li><strong>Envit</strong> → val 2 pedres</li>
              <li><strong>Torne a envidar</strong> (renvit) → val 4 pedres</li>
              <li><strong>Falta envit</strong> → si els dos equips estan en males, es juguen les pedres que falten per completar la cama; si algun equip està en bones, es juguen les pedres que li falten a l'equip que més pedres té per guanyar la cama.</li>
            </ul>
            <p className="mt-1 text-xs text-muted-foreground">
              Si l'adversari rebutja l'envit, la parella que l'ha cantat guanya les pedres del nivell anterior.
            </p>
          </section>

          {/* Truc */}
          <section id="truc" className="scroll-mt-4">
            <h2 className="font-display font-bold text-gold text-base mb-1">El Truc</h2>
            <p>
              En qualsevol moment de la mà, un jugador pot cantar <strong>«Truc!»</strong>, que apuja el valor de la mà:
            </p>
            <ul className="list-disc list-inside text-xs space-y-0.5 mt-1">
              <li><strong>Truc</strong> → val 2 pedres</li>
              <li><strong>Retruc</strong> → val 3 pedres</li>
              <li><strong>Quatre val</strong> → val 4 pedres</li>
              <li><strong>Joc fora</strong> → tota la partida (totes les cames per guanyar la partida)</li>
            </ul>
            <p className="mt-1 text-xs text-muted-foreground">
              L'equip contrari pot acceptar, rebutjar (perd les pedres del nivell anterior) o pujar.
              Només pot pujar el truc un jugador de l'equip contrari al que l'ha cantat.
            </p>
          </section>

          {/* Senyals */}
          <section>
            <h2 className="font-display font-bold text-gold text-base mb-1">Les senyals</h2>
            <p>
              Part fonamental del Truc Valencià. Els companys es comuniquen amb <strong>senyals facials</strong> (gestos)
              per indicar les cartes que tenen. Les senyals clàssiques són:
            </p>
            <div className="bg-card/50 rounded-lg p-3 border border-border mt-2">
              <p className="text-xs font-bold text-gold mb-1">Senyes del truc</p>
              <ul className="text-xs space-y-1">
                <li>🤨 <strong>Alçar les celles</strong> → tinc l'As d'Espases</li>
                <li>😉 <strong>Picar l'ull</strong> → tinc l'As de Bastos</li>
                <li>👅 <strong>Traure la llengua a la dreta</strong> → tinc el 7 d'Espases</li>
                <li>👅 <strong>Traure la llengua a l'esquerra</strong> → tinc el 7 d'Oros</li>
                <li>😬 <strong>Mossegar-se el llavi</strong> → tinc un tres</li>
                <li>😑 <strong>Tancar els ulls</strong> → vaig cego (no tinc senyes)</li>
              </ul>
              <p className="text-xs font-bold text-gold mt-2 mb-1">Senyes de l'envit</p>
              <ul className="text-xs space-y-1">
                <li>😗 <strong>Inflar la boca (carrills amb aire)</strong> → tinc 33</li>
                <li>💪 <strong>Alçar el muscle dret</strong> → tinc 32</li>
                <li>💪 <strong>Alçar el muscle esquerre</strong> → tinc 31</li>
              </ul>
            </div>
            <p className="mt-2 text-xs text-muted-foreground">
              Enganyar amb les senyals (fer senyals falses) és part del joc i de l'estratègia!
            </p>
          </section>

          {/* Estratègia bàsica */}
          <section>
            <h2 className="font-display font-bold text-gold text-base mb-1">Estratègia bàsica</h2>
            <ul className="list-disc list-inside text-xs space-y-1">
              <li>Comunica't amb el company amb senyals abans de cantar envit o truc.</li>
              <li>El <strong>farol</strong> (engany) és essencial: cantar truc sense bones cartes pot fer que l'adversari es retire.</li>
              <li>Controla el marcador: si estàs a prop de tancar la cama, el «falta envit» o «joc fora» pot ser decisiu.</li>
              <li>Guarda la millor carta per a l'última bassa si pots.</li>
              <li>Observa les senyals dels adversaris per intentar detectar què tenen.</li>
            </ul>
          </section>

          {/* Termes comuns */}
          <section id="termes" className="scroll-mt-4">
            <h2 className="font-display font-bold text-gold text-base mb-1">Termes comuns</h2>
            <div className="bg-card/50 rounded-lg p-3 border border-border">
              <dl className="text-xs space-y-1">
                <div><dt className="inline font-bold">Mà:</dt> <dd className="inline">Jugador que comença la mà.</dd></div>
                <div><dt className="inline font-bold">Bassa:</dt> <dd className="inline">Cada ronda dins d'una mà (hi ha fins a 3).</dd></div>
                <div><dt className="inline font-bold">Cama:</dt> <dd className="inline">Meitat de la partida (9 o 12 pedres).</dd></div>
                <div><dt className="inline font-bold">Pedra:</dt> <dd className="inline">Punt al marcador.</dd></div>
                <div><dt className="inline font-bold">Parda:</dt> <dd className="inline">Empat en una bassa.</dd></div>
                <div><dt className="inline font-bold">Falta:</dt> <dd className="inline">Apostar les pedres que falten per completar la cama si els dos equips estan en males; si algun equip està en bones, les pedres que li falten a l'equip que més pedres té per guanyar la cama.</dd></div>
              </dl>
            </div>
          </section>

        </div>

        <div className="h-10" aria-hidden="true" />
      </div>
    </main>
  );
};

export default Regles;