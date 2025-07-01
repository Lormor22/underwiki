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
    <div class="menu_razas">
        <div>
            <a href="../clases/gladiator.html">
                <div class="opciones_razas">
                    <img src="../../img/warrior/gladi/skill0001_Triple_Slash.webp" alt="gladi">
                    <p class="test">Gladiator</p>           
                </div>
            </a>
            <a href="../clases/duelist.html">
                <div class="opciones_razas">
                    <img src="../../img/warrior/gladi/skill0345_Sonic_Rage.webp" alt="duelist">
                    <p class="test">Duelist</p>                
                </div>
            </a>
        </div>
        <div>
            <a href="../clases/warlord.html">
                <div class="opciones_razas">
                    <img src="../../img/warrior/pole/skill0048_Thunder_Storm.webp" alt="warlord">
                    <p class="test">Warlord</p>
                </div>
            </a>
            <a href="../clases/dreadnought.html">
                <div class="opciones_razas">
                    <img src="../../img/warrior/pole/skill0361_Shock_Blast.webp" alt="Dreadnought">
                    <p class="test">Dreadnought</p>       
                </div>
            </a>
        </div>
        <div>
            <a href="../clases/paladin.html">
                <div class="opciones_razas">
                    <img src="../../img/tank/pala/skill0406_Angelic_Icon.webp" alt="paladin">
                    <p class="test">Paladin</p>
                </div>
            </a>
            <a href="../clases/Phoenix_Knight.html">
                <div class="opciones_razas">
                    <img src="../../img/tank/pala/skill0438_Soul_of_the_Phoenix.webp" alt="Phoenix Knight">
                    <p class="test">Phoenix Knight</p>
                </div>
            </a>

        </div>
        <div>
            <a href="../clases/Dark_Avenger.html">
                <div class="opciones_razas">
                    <img src="../../img/tank/da/skill0283_Summon_Dark_Panther.webp" alt="Dark Avenger">
                    <p class="test">Dark Avenger</p>
                </div>
            </a>
            <a href="../clases/Hell_Knight.html">
                <div class="opciones_razas">
                    <img src="../../img/tank/da/skill0763_Hell_Scream.webp" alt="Hell Knight">
                    <p class="test">Hell Knight</p>
                </div>
            </a>
        </div>
        <div>
            <a href="../clases/Treasure_Hunter.html">
                <div class="opciones_razas">
                    <img src="../../img/arqdag/skill0409_Critical_Blow.webp" alt="Treasure Hunter">
                    <p class="test">Treasure Hunter</p>
                </div>
            </a>
            <a href="../clases/Adventurer.html">
                <div class="opciones_razas">
                    <img src="../../img/arqdag/skill0768_Exciting_Adventure.webp" alt="Adventurer">
                    <p class="test">Adventurer</p>
                </div>
            </a>
        </div>
        <div >
            <a href="../clases/Hawkeye.html">
                <div class="opciones_razas">
                    <img src="../../img/arqdag/skill0313_snipe.webp" alt="Hawkeye">
                    <p class="test">Hawkeye</p>
                </div>
            </a>
            <a href="../clases/Sagittarius.html">
                <div class="opciones_razas">
                    <img src="../../img/arqdag/skill0771_Flame_Hawk.webp" alt="Sagittarius">
                    <p class="test">Sagittarius</p>
                </div>
            </a>
        </div>
    </div>
    <div class="menu_razas">
        <div>
            <a href="../clases/Sorceror.html">
                <div class="opciones_razas">
                    <img src="../../img/mago/skill1230_Prominence.webp" alt="Sorceror">
                    <p class="test">Sorceror</p>           
                </div>
            </a>
            <a href="../clases/Archmage.html">
                <div class="opciones_razas">
                    <img src="../../img/mago/skill1339_Fire_Vortex.webp" alt="Archmage">
                    <p class="test">Archmage</p>                
                </div>
            </a>
        </div>
        <div>
            <a href="../clases/Necromancer.html">
                <div class="opciones_razas">
                    <img src="../../img/mago/skill1263_Curse_Gloom.webp" alt="Necromancer">
                    <p class="test">Necromancer</p>
                </div>
            </a>
            <a href="../clases/Soultaker.html">
                <div class="opciones_razas">
                    <img src="../../img/mago/skill1336_Curse_of_Doom.webp" alt="Soultaker">
                    <p class="test">Soultaker</p>       
                </div>
            </a>
        </div>
        <div>
            <a href="../clases/Warlock.html">
                <div class="opciones_razas">
                    <img src="../../img/mago/skill1331_Summon_Feline_Queen.webp" alt="Warlock">
                    <p class="test">Warlock</p>
                </div>
            </a>
            <a href="../clases/Arcana_Lord.html">
                <div class="opciones_razas">
                    <img src="../../img/mago/skill1406_Summon_Feline_King.webp" alt="Arcana Lord">
                    <p class="test">Arcana Lord</p>
                </div>
            </a>
        </div>
        <div>
            <a href="../clases/Bishop.html">
                <div class="opciones_razas">
                    <img src="../../img/mago/skill1218_Greater_Battle_Heal.webp" alt="Bishop">
                    <p class="test">Bishop</p>
                </div>
            </a>
            <a href="../clases/Cardinal.html">
                <div class="opciones_razas">
                    <img src="../../img/mago/skill1335_Balance_Life.webp" alt="Cardinal">
                    <p class="test">Cardinalt</p>
                </div>
            </a>
        </div>
        <div>
            <a href="../clases/Prophet.html">
                <div class="opciones_razas">
                    <img src="../../img/mago/skill1086_Haste.webp" alt="Prophet">
                    <p class="test">Prophet</p>
                </div>
            </a>
            <a href="../clases/Hierophant.html">
                <div class="opciones_razas">
                    <img src="../../img/mago/skill1356_Prophecy_of_Fire.webp" alt="Hierophant">
                    <p class="test">Hierophant</p>
                </div>
            </a>
        </div>
    </div>
    `

}

function mostrar_elfos(){

    cerrar_todo();

    let nuevo_contenido = document.getElementById("menu_razas_parte2");
    nuevo_contenido.innerHTML= `
    <div class="menu_razas">
        <div>
            <a href="../clases/Temple_Knight.html">
                <div class="opciones_razas">
                    <img src="../../img/general/cubics/skill0449_Summon_Attractive_Cubic.webp" alt="Temple Knight">
                    <p class="test">Temple Knight</p>   
                </div>
            </a> 
            <a href="../clases/Evas_Templar.html">
                <div class="opciones_razas">
                    <img src="../../img/tank/tk/skill0787_Touch_of_Eva.webp" alt="Evas Templar">
                    <p class="test">Evas Templar</p>                
                </div>
            </a> 
        </div>

        <div>
            <a href="../clases/Sword_Singer.html">
                <div class="opciones_razas">
                    <img src="../../img/tank/sws/skill0304_Song_of_Vitality.webp" alt="Sword Singer">
                    <p class="test">Sword Singer</p>           
                </div>
            </a> 
            <a href="../clases/Sword_Muse.html">
                <div class="opciones_razas">
                    <img src="../../img/tank/sws/skill0914_Song_of_Purification.webp" alt="Sword Muse">
                    <p class="test">Sword Muse</p>                
                </div>
            </a> 
        </div>

        <div>
            <a href="../clases/Plains_Walker.html">
                <div class="opciones_razas">
                    <img src="../../img/arqdag/skill0296_Chameleon_Rest.webp" alt="Plains Walkerr">
                    <p class="test">Plains Walker</p>           
                </div>
            </a> 
            <a href="../clases/Wind_Rider.html">
                <div class="opciones_razas">
                    <img src="../../img/arqdag/skill0769_Wind_Riding.webp" alt="Wind Rider">
                    <p class="test">Wind Rider</p>                
                </div>
            </a> 
        </div>

        <div>
            <a href="../clases/Temple_Knight.html"> 
                <div class="opciones_razas">
                    <img src="../../img/arqdag/skill0413_Rapid_Fire.webp" alt="Silver Ranger">
                    <p class="test">Silver Ranger</p>           
                </div>
            </a>
            <a href="../clases/Temple_Knight.html"> 
                <div class="opciones_razas">
                    <img src="../../img/arqdag/skill0772_Arrow_Rain.webp" alt="Moonlight Sentinel">
                    <p class="test">Moonlight Sentinel</p>                
                </div>
            </a>
        </div>

    </div>
    <div class="menu_razas">
        <div>
            <a href="../clases/Temple_Knight.html"> 
                <div class="opciones_razas">
                    <img src="../../img/mago/skill1235_Hydro_Blast.webp" alt="Spell Singer">
                    <p class="test">Spell Singer</p>           
                </div>
            </a>
            <a href="../clases/Temple_Knight.html"> 
                <div class="opciones_razas">
                    <img src="../../img/mago/skill1340_Ice_Vortex.webp" alt="MysticMuse">
                    <p class="test">MysticMuse</p>                
                </div>
            </a>
        </div>

        <div>
            <a href="../clases/Temple_Knight.html">
                <div class="opciones_razas">
                    <img src="../../img/mago/skill1332_Summon_Seraphim_the_Unicorn.webp" alt="Elemental Summoner">
                    <p class="test">Elemental Summoner</p>         
                </div>
            </a>
            <a href="../clases/Temple_Knight.html">
                <div class="opciones_razas">
                    <img src="../../img/mago/skill1407_Summon_Magnus_the_Unicorn.webp" alt="Elemental Master">
                    <p class="test">Elemental Master</p>    
                </div>
            </a>
        </div>

        <div>
            <a href="../clases/Temple_Knight.html">
                <div class="opciones_razas">
                    <img src="../../img/mago/skill1259_Resist_Shock.webp" alt="Elven Elder">
                    <p class="test">Elven Elder</p>           
                </div>
            </a>
            <a href="../clases/Temple_Knight.html">
                <div class="opciones_razas">
                    <img src="../../img/mago/skill1355_Prophecy_of_Water.webp" alt="Evas Saint">
                    <p class="test">Evas Saint</p>                
                </div>
            </a>
        </div>
    </div>
    `
}

function mostrar_d_elfos(){

    cerrar_todo();

    let nuevo_contenido = document.getElementById("menu_razas_parte2");
    nuevo_contenido.innerHTML= `
    <div class="menu_razas">
        <div>
            <div class="opciones_razas">
                <img src="../../img/tank/sk/skill0279_Lightning_Strike.webp" alt="Shilien Knight">
                <p class="test">Shilien Knight</p>           
            </div>
            <div class="opciones_razas">
                <img src="../../img/tank/sk/skill0789_Spirit_of_Shilen.webp" alt="Shilien Templar">
                <p class="test">Shilien Templar</p>                
            </div>
        </div>

        <div>
            <div class="opciones_razas">
                <img src="../../img/tank/bd/skill0275_Dance_of_Fury.webp" alt="Blade Dancer">
                <p class="test">Blade Dancer</p>           
            </div>
            <div class="opciones_razas">
                <img src="../../img/tank/bd/skill0365_Dance_of_Siren.webp" alt="Spectral Dancer">
                <p class="test">Spectral Dancer</p>                
            </div>
        </div>

        <div>
            <div class="opciones_razas">
                <img src="../../img/arqdag/skill0321_Blinding_Blow.webp" alt="Abyss Walker">
                <p class="test">Abyss Walker</p>           
            </div>
            <div class="opciones_razas">
                <img src="../../img/arqdag/skill0770_Ghost_Walking.webp" alt="Ghost Hunter">
                <p class="test">Ghost Hunter</p>                
            </div>
        </div>

        <div>
            <div class="opciones_razas">
                <img src="../../img/arqdag/skill0414_Dead_Eye.webp" alt="Phantom Ranger">
                <p class="test">Phantom Ranger</p>           
            </div>
            <div class="opciones_razas">
                <img src="../../img/arqdag/skill0773_Ghost_Piercing.webp" alt="Ghost Sentinel">
                <p class="test">Ghost Sentinel</p>                
            </div>
        </div>

    </div>
    <div class="menu_razas">
        <div>
            <div class="opciones_razas">
                <img src="../../img/mago/skill1239_Hurricane.webp" alt="Spellhowler">
                <p class="test">Spellhowler</p>           
            </div>
            <div class="opciones_razas">
                <img src="../../img/mago/skill1457_Empowering_Echo.webp" alt="Storm Screamer">
                <p class="test">Storm Screamer</p>                
            </div>
        </div>

        <div>
            <div class="opciones_razas">
                <img src="../../img/mago/skill1333_Summon_Nightshade.webp" alt="Phantom Summoner">
                <p class="test">Phantom Summonerr</p>         
            </div>
            <div class="opciones_razas">
                <img src="../../img/mago/skill1408_Summon_Spectral_Lord.webp" alt="Spectral Master">
                <p class="test">Spectral Master</p>    
            </div>
        </div>

        <div>
            <div class="opciones_razas">
                <img src="../../img/mago/skill1539_Stigma_of_Shilien.webp" alt="Shilien Elder">
                <p class="test">Shilien Elder</p>           
            </div>
            <div class="opciones_razas">
                <img src="../../img/mago/skill1357_Prophecy_of_Wind.webp" alt="Shilien Saint">
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
    <div class="menu_razas">
        <div>
            <div class="opciones_razas">
                <img src="../../img/warrior/destro/skill0176_Frenzy.webp" alt="Destroyer">
                <p class="test">Destroyer</p>           
            </div>
            <div class="opciones_razas">
                <img src="../../img/warrior/destro/skill0536_Over_the_Body.webp" alt="Titan">
                <p class="test">Titan</p>                
            </div>
        </div>
        <div>
            <div class="opciones_razas">
                <img src="../../img/warrior/tyran/skill0222_Fury_Fists.webp" alt="Tyrant">
                <p class="test">Tyrant</p>
            </div>
            <div class="opciones_razas">
                <img src="../../img/warrior/tyran/skill0346_Raging_Force.webp" alt="Grand Khavatari">
                <p class="test">Grand Khavatari</p>       
            </div>
        </div>
        <div>
            <div class="opciones_razas">
                <img src="../../img/orc/skill1248_Seal_of_Suspension.webp" alt="Overlord">
                <p class="test">Overlord</p>
            </div>
            <div class="opciones_razas">
                <img src="../../img/orc/skill1509_Seal_of_Limit.webp" alt="Dominator">
                <p class="test">Dominator</p>
            </div>
        </div>
        <div>
            <div class="opciones_razas">
                <img src="../../img/orc/skill1002_Flame_Chant.webp" alt="Warcryer">
                <p class="test">Warcryer</p>
            </div>
            <div class="opciones_razas">
                <img src="../../img/orc/skill1366_Chant_of_Victory.webp" alt="Doomcryer">
                <p class="test">Doomcryer</p>
            </div>
        </div>
    </div>
    `
}

function mostrar_enanos(){

    cerrar_todo();

    let nuevo_contenido = document.getElementById("menu_razas_parte2");
    nuevo_contenido.innerHTML= `
    <div class="menu_razas">
        <div>
            <div class="opciones_razas">
                <img src="../../img/enano/skill0254_spoil.webp" alt="Bounty Hunter">
                <p class="test">Bounty Hunter</p>           
            </div>
            <div class="opciones_razas">
                <img src="../../img/enano/skill0348_Spoil_Crush.webp" alt="Fortune Seeker">
                <p class="test">Fortune Seeker</p>                
            </div>
        </div>
        <div>
            <div class="opciones_razas">
                <img src="../../img/enano/skill0025_Summon_Mechanic_Golem.webp" alt="Warsmith">
                <p class="test">Warsmith</p>
            </div>
            <div class="opciones_razas">
                <img src="../../img/enano/skill0778_Golem_Armor.webp" alt="Maestro">
                <p class="test">Maestro</p>       
            </div>
        </div>
    </div>
    `
}

function mostrar_kamaeles(){
    
    cerrar_todo();

    let nuevo_contenido = document.getElementById("menu_razas_parte2");
    nuevo_contenido.innerHTML= `
    <div class="menu_razas">
        <div>
            <div class="opciones_razas">
                <img src="../../img/kamael/skill0501_Violent_Temper.webp" alt="Berserker">
                <p class="test">Berserker</p>           
            </div>
            <div class="opciones_razas">
                <img src="../../img/kamael/skill0793_Rush_Impact.webp" alt="Doombringer">
                <p class="test">Doombringer</p>                
            </div>
        </div>
        <div>
            <div class="opciones_razas">
                <img src="../../img/kamael/skill1440_Steal_Divinity.webp" alt="Male Soulbreaker">
                <p class="test">Male Soulbreaker</p>
            </div>
            <div class="opciones_razas">
                <img src="../../img/kamael/skill0791_Lightning_Shock.webp" alt="Male Soulhound">
                <p class="test">Male Soulhound</p>       
            </div>
        </div>
        <div>
            <div class="opciones_razas">
                <img src="../../img/kamael/skill1476_Appetite_for_Destruction.webp" alt="Inspector">
                <p class="test">Inspector</p>
            </div>
            <div class="opciones_razas">
                <img src="../../img/kamael/skill0538_Final_Form.webp" alt="Judicator">
                <p class="test">Judicator</p>
            </div>
        </div>
        <div>
            <div class="opciones_razas">
                <img src="../../img/kamael/skill1440_Steal_Divinity.webp" alt="Female Soulbreaker">
                <p class="test">Female Soulbreaker</p>
            </div>
            
            <div class="opciones_razas">
                <img src="../../img/kamael/skill0791_Lightning_Shock.webp" alt="Female Soulhound">
                <p class="test">Female Soulhound</p>
            </div>
        </div>
        <div>
            <div class="opciones_razas">
                <img src="../../img/kamael/skill0522_Real_Target.webp" alt="Arbalester">
                <p class="test">Arbalester</p>
            </div>
            <div class="opciones_razas">
                <img src="../../img/kamael/skill1470_Prahnah.webp" alt="Trikster">
                <p class="test">Trikster</p>
            </div>
        </div>
    </div>
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