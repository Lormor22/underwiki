// Funcion para cerrar todo por si clickean otro icono
function cerrar_todo(){
let elemento1 = document.getElementById("menu_razas_parte2");
elemento1.innerHTML="";
}


function mostrar_humanos(){

    cerrar_todo();

    let nuevo_contenido = document.getElementById("menu_razas_parte2");
    // <a href="./pages/test.html"></a>
    nuevo_contenido.innerHTML= `
    <br />
    <div class="menu_razas">
        <div>
            <a href="./pages/test.html">
                <div class="opciones_razas">
                    <img src="./img/gladiador.png" alt="gladi">
                    <p class="test">Gladiator</p>           
                </div>
            </a>
            <a href="./pages/test.html">
                <div class="opciones_razas">
                    <img src="./img/duelist.png" alt="duelist">
                    <p class="test">Duelist</p>                
                </div>
            </a>
        </div>
        <div>
            <a href="./pages/test.html">
                <div class="opciones_razas">
                    <img src="./img/warlord.png" alt="warlord">
                    <p class="test">Warlord</p>
                </div>
            </a>
            <a href="./pages/test.html">
                <div class="opciones_razas">
                    <img src="./img/dreagna.png" alt="Dreadnought">
                    <p class="test">Dreadnought</p>       
                </div>
            </a>
        </div>
        <div>
            <a href="./pages/test.html">
                <div class="opciones_razas">
                    <img src="./img/paladin.png" alt="paladin">
                    <p class="test">Paladin</p>
                </div>
            </a>
            <a href="./pages/test.html">
                <div class="opciones_razas">
                    <img src="./img/phoenixkn.png" alt="Phoenix Knight">
                    <p class="test">Phoenix Knight</p>
                </div>
            </a>

        </div>
        <div>
            <a href="./pages/test.html">
                <div class="opciones_razas">
                    <img src="./img/DA.png" alt="Dark Avenger">
                    <p class="test">Dark Avenger</p>
                </div>
            </a>
            <a href="./pages/test.html">
                <div class="opciones_razas">
                    <img src="./img/hellDA.png" alt="Hell Knight">
                    <p class="test">Hell Knight</p>
                </div>
            </a>
        </div>
        <div>
            <a href="./pages/test.html">
                <div class="opciones_razas">
                    <img src="./img/th.png" alt="Treasure Hunter">
                    <p class="test">Treasure Hunter</p>
                </div>
            </a>
            <a href="./pages/test.html">
                <div class="opciones_razas">
                    <img src="./img/adventu.png" alt="Adventurer">
                    <p class="test">Adventurer</p>
                </div>
            </a>
        </div>
        <div >
            <a href="./pages/test.html">
                <div class="opciones_razas">
                    <img src="./img/HE.png" alt="Hawkeye">
                    <p class="test">Hawkeye</p>
                </div>
            </a>
            <a href="./pages/test.html">
                <div class="opciones_razas">
                    <img src="./img/sagit.png" alt="Sagittarius">
                    <p class="test">Sagittarius</p>
                </div>
            </a>
        </div>
    </div>
    <br/>
    <div class="menu_razas">
        <div>
            <a href="./pages/test.html">
                <div class="opciones_razas">
                    <img src="./img/sorce.png" alt="Sorceror">
                    <p class="test">Sorceror</p>           
                </div>
            </a>
            <a href="./pages/test.html">
                <div class="opciones_razas">
                    <img src="./img/archmage.png" alt="Archmage">
                    <p class="test">Archmage</p>                
                </div>
            </a>
        </div>
        <div>
            <a href="./pages/test.html">
                <div class="opciones_razas">
                    <img src="./img/necro.png" alt="Necromancer">
                    <p class="test">Necromancer</p>
                </div>
            </a>
            <a href="./pages/test.html">
                <div class="opciones_razas">
                    <img src="./img/soultaker.png" alt="Soultaker">
                    <p class="test">Soultaker</p>       
                </div>
            </a>
        </div>
        <div>
            <a href="./pages/test.html">
                <div class="opciones_razas">
                    <img src="./img/warlo.png" alt="Warlock">
                    <p class="test">Warlock</p>
                </div>
            </a>
            <a href="./pages/test.html">
                <div class="opciones_razas">
                    <img src="./img/arcana_lord.png" alt="Arcana Lord">
                    <p class="test">Arcana Lord</p>
                </div>
            </a>
        </div>
        <div>
            <a href="./pages/test.html">
                <div class="opciones_razas">
                    <img src="./img/bishop.png" alt="Bishop">
                    <p class="test">Bishop</p>
                </div>
            </a>
            <a href="./pages/test.html">
                <div class="opciones_razas">
                    <img src="./img/cardinal.png" alt="Cardinal">
                    <p class="test">Cardinalt</p>
                </div>
            </a>
        </div>
        <div>
            <a href="./pages/test.html">
                <div class="opciones_razas">
                    <img src="./img/berseker.png" alt="Prophet">
                    <p class="test">Prophet</p>
                </div>
            </a>
            <a href="./pages/test.html">
                <div class="opciones_razas">
                    <img src="./img/hieropa.png" alt="Hierophant">
                    <p class="test">Hierophant</p>
                </div>
            </a>
        </div>
    </div>
    <br/>
    `
}

function mostrar_elfos(){

    cerrar_todo();

    let nuevo_contenido = document.getElementById("menu_razas_parte2");
    nuevo_contenido.innerHTML= `
    <br />
    <div class="menu_razas">
        <div>
            <div class="opciones_razas">
                <img src="./img/tk.png" alt="Temple Knight">
                <p class="test">Temple Knight</p>           
            </div>
            <div class="opciones_razas">
                <img src="./img/ET.png" alt="Evas Templar">
                <p class="test">Evas Templar</p>                
            </div>
        </div>

        <div>
            <div class="opciones_razas">
                <img src="./img/sws.png" alt="Sword Singer">
                <p class="test">Sword Singer</p>           
            </div>
            <div class="opciones_razas">
                <img src="./img/SM.png" alt="Sword Muse">
                <p class="test">Sword Muse</p>                
            </div>
        </div>

        <div>
            <div class="opciones_razas">
                <img src="./img/PW.png" alt="Plains Walkerr">
                <p class="test">Plains Walker</p>           
            </div>
            <div class="opciones_razas">
                <img src="./img/WR.png" alt="Wind Rider">
                <p class="test">Wind Rider</p>                
            </div>
        </div>

        <div>
            <div class="opciones_razas">
                <img src="./img/SR.png" alt="Silver Ranger">
                <p class="test">Silver Ranger</p>           
            </div>
            <div class="opciones_razas">
                <img src="./img/MS.png" alt="Moonlight Sentinel">
                <p class="test">Moonlight Sentinel</p>                
            </div>
        </div>

    </div>
    <br/>
    <div class="menu_razas">
        <div>
            <div class="opciones_razas">
                <img src="./img/SPS.png" alt="Spell Singer">
                <p class="test">Spell Singer</p>           
            </div>
            <div class="opciones_razas">
                <img src="./img/MM.png" alt="MysticMuse">
                <p class="test">MysticMuse</p>                
            </div>
        </div>

        <div>
            <div class="opciones_razas">
                <img src="./img/ES.png" alt="Elemental Summoner">
                <p class="test">Elemental Summoner</p>         
            </div>
            <div class="opciones_razas">
                <img src="./img/EM.png" alt="Elemental Master">
                <p class="test">Elemental Master</p>    
            </div>
        </div>

        <div>
            <div class="opciones_razas">
                <img src="./img/EE.png" alt="Elven Elder">
                <p class="test">Elven Elder</p>           
            </div>
            <div class="opciones_razas">
                <img src="./img/ESaint.png" alt="Evas Saint">
                <p class="test">Evas Saint</p>                
            </div>
        </div>
    </div>
    `
}

function mostrar_d_elfos(){

    cerrar_todo();

    let nuevo_contenido = document.getElementById("menu_razas_parte2");
    nuevo_contenido.innerHTML= `
    <br />
    <div class="menu_razas">
        <div>
            <div class="opciones_razas">
                <img src="./img/SK.png" alt="Shilien Knight">
                <p class="test">Shilien Knight</p>           
            </div>
            <div class="opciones_razas">
                <img src="./img/ST.png" alt="Shilien Templar">
                <p class="test">Shilien Templar</p>                
            </div>
        </div>

        <div>
            <div class="opciones_razas">
                <img src="./img/BD.png" alt="Blade Dancer">
                <p class="test">Blade Dancer</p>           
            </div>
            <div class="opciones_razas">
                <img src="./img/SD.png" alt="Spectral Dancer">
                <p class="test">Spectral Dancer</p>                
            </div>
        </div>

        <div>
            <div class="opciones_razas">
                <img src="./img/AW.png" alt="Abyss Walker">
                <p class="test">Abyss Walker</p>           
            </div>
            <div class="opciones_razas">
                <img src="./img/GH.png" alt="Ghost Hunter">
                <p class="test">Ghost Hunter</p>                
            </div>
        </div>

        <div>
            <div class="opciones_razas">
                <img src="./img/PR.png" alt="Phantom Ranger">
                <p class="test">Phantom Ranger</p>           
            </div>
            <div class="opciones_razas">
                <img src="./img/GS.png" alt="Ghost Sentinel">
                <p class="test">Ghost Sentinel</p>                
            </div>
        </div>

    </div>
    <br/>
    <div class="menu_razas">
        <div>
            <div class="opciones_razas">
                <img src="./img/SPH.png" alt="Spellhowler">
                <p class="test">Spellhowler</p>           
            </div>
            <div class="opciones_razas">
                <img src="./img/SS.png" alt="Storm Screamer">
                <p class="test">Storm Screamer</p>                
            </div>
        </div>

        <div>
            <div class="opciones_razas">
                <img src="./img/PS.png" alt="Phantom Summoner">
                <p class="test">Phantom Summonerr</p>         
            </div>
            <div class="opciones_razas">
                <img src="./img/SM.png" alt="Spectral Master">
                <p class="test">Spectral Master</p>    
            </div>
        </div>

        <div>
            <div class="opciones_razas">
                <img src="./img/SE.png" alt="Shilien Elder">
                <p class="test">Shilien Elder</p>           
            </div>
            <div class="opciones_razas">
                <img src="./img/SSaint.png" alt="Shilien Saint">
                <p class="test">Shilien Saint</p>                
            </div>
        </div>
    </div>
    `


}

function mostrar_orcos(){

    cerrar_todo();

    let nuevo_contenido = document.getElementById("menu_razas_parte2");
    nuevo_contenido.innerHTML= `
    <br />
    <div class="menu_razas">
        <div>
            <div class="opciones_razas">
                <img src="./img/destro.png" alt="Destroyer">
                <p class="test">Destroyer</p>           
            </div>
            <div class="opciones_razas">
                <img src="./img/titan.png" alt="Titan">
                <p class="test">Titan</p>                
            </div>
        </div>
        <div>
            <div class="opciones_razas">
                <img src="./img/tyran.png" alt="Tyrant">
                <p class="test">Tyrant</p>
            </div>
            <div class="opciones_razas">
                <img src="./img/GK.png" alt="Grand Khavatari">
                <p class="test">Grand Khavatari</p>       
            </div>
        </div>
        <div>
            <div class="opciones_razas">
                <img src="./img/OL.png" alt="Overlord">
                <p class="test">Overlord</p>
            </div>
            <div class="opciones_razas">
                <img src="./img/domi.png" alt="Dominator">
                <p class="test">Dominator</p>
            </div>
        </div>
        <div>
            <div class="opciones_razas">
                <img src="./img/wc.png" alt="Warcryer">
                <p class="test">Warcryer</p>
            </div>
            <div class="opciones_razas">
                <img src="./img/dc.png" alt="Doomcryer">
                <p class="test">Doomcryer</p>
            </div>
        </div>
    </div>
    <br/>
    `
}

function mostrar_enanos(){

    cerrar_todo();

    let nuevo_contenido = document.getElementById("menu_razas_parte2");
    nuevo_contenido.innerHTML= `
    <br />
    <div class="menu_razas">
        <div>
            <div class="opciones_razas">
                <img src="./img/BH.png" alt="Bounty Hunter">
                <p class="test">Bounty Hunter</p>           
            </div>
            <div class="opciones_razas">
                <img src="./img/FS.png" alt="Fortune Seeker">
                <p class="test">Fortune Seeker</p>                
            </div>
        </div>
        <div>
            <div class="opciones_razas">
                <img src="./img/WS.png" alt="Warsmith">
                <p class="test">Warsmith</p>
            </div>
            <div class="opciones_razas">
                <img src="./img/maestro.png" alt="Maestro">
                <p class="test">Maestro</p>       
            </div>
        </div>
    </div>
<br/>
    `
}

function mostrar_kamaeles(){
    
    cerrar_todo();

    let nuevo_contenido = document.getElementById("menu_razas_parte2");
    nuevo_contenido.innerHTML= `
    <br/>
    <div class="menu_razas">
        <div>
            <div class="opciones_razas">
                <img src="./img/Kberseker.png" alt="Berserker">
                <p class="test">Berserker</p>           
            </div>
            <div class="opciones_razas">
                <img src="./img/doomb.png" alt="Doombringer">
                <p class="test">Doombringer</p>                
            </div>
        </div>
        <div>
            <div class="opciones_razas">
                <img src="./img/SoulbreakerM.png" alt="Male Soulbreaker">
                <p class="test">Male Soulbreaker</p>
            </div>
            <div class="opciones_razas">
                <img src="./img/SH.png" alt="Male Soulhound">
                <p class="test">Male Soulhound</p>       
            </div>
        </div>
        <div>
            <div class="opciones_razas">
                <img src="./img/SoulbreakerM.png" alt="Female Soulbreaker">
                <p class="test">Female Soulbreaker</p>
            </div>
            <div class="opciones_razas">
                <img src="./img/SH.png" alt="Female Soulhound">
                <p class="test">Female Soulhound</p>
            </div>
        </div>
        <div>
            <div class="opciones_razas">
                <img src="./img/arba.png" alt="Arbalester">
                <p class="test">Arbalester</p>
            </div>
            <div class="opciones_razas">
                <img src="./img/trik.png" alt="Trikster">
                <p class="test">Trikster</p>
            </div>
        </div>
        <div>
            <div class="opciones_razas">
                <img src="./img/insp.png" alt="Inspector">
                <p class="test">Inspector</p>
            </div>
            <div class="opciones_razas">
                <img src="./img/judi.png" alt="Judicator">
                <p class="test">Judicator</p>
            </div>
        </div>
    </div>
    <br/>
    `
}





// activadores

let boton_raza1 = document.getElementById("human");
boton_raza1.addEventListener("click" , mostrar_humanos);

let boton_raza2 = document.getElementById("elf");
boton_raza2.addEventListener("click" , mostrar_elfos);

let boton_raza3 = document.getElementById("dark_elf");
boton_raza3.addEventListener("click" , mostrar_d_elfos);

let boton_raza4 = document.getElementById("orc");
boton_raza4.addEventListener("click" , mostrar_orcos);

let boton_raza5 = document.getElementById("dwarf");
boton_raza5.addEventListener("click" , mostrar_enanos);

let boton_raza6 = document.getElementById("kamael");
boton_raza6.addEventListener("click" , mostrar_kamaeles);