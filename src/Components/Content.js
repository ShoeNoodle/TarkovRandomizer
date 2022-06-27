import Button from './Button'
import { useState } from 'react'
import placeholderimage from './Images/placeholderimage.png'
import armour from './Images/armourexport.js'
import sidearm from './Images/sidearmsexport.js'
import map from './Images/mapsexport.js'
import grenades from './Images/grenadeexports.js'
import headset from './Images/headsetexport.js'
import rig from './Images/rigexport.js'
import Backpacks from './Images/backpackexport'
import Helmets from './Images/helmetexport'
import Stims from './Images/stimexport'
import meds from './Images/medexport'
import Guns from './Images/gunsexport'
import TOD from './Images/Timeofdayexport'
import Bullets from './Images/Bulletexport'
var a = 0;
var i = 0;
var bulletarray = [];
var bulletarray2 = [];
var bulletarray3 = [];
var randombullet;
var randombullet2;
var randombullet3;
const Content = () => {
  const[PrimaryGunImage, setPrimaryGunImage] = useState(placeholderimage);
  const[PrimaryGunTag, SetPrimaryGunTag] = useState('');
  const[SecondaryGunImage, setSecondaryGunImage] = useState(placeholderimage);
  const[SecondaryGunTag, SetSecondaryGunTag] = useState('');
  const[SidearmGunImage, setSidearmImage] = useState(placeholderimage);
  const[SidearmGunTag, SetSidearmGunTag] = useState('');
  const[HelmetImage, SetHelmetImage] = useState(placeholderimage);
  const[HelmetTag, SetHelmetTag] = useState('');
  const[HeadsetImage, SetHeadsetImage] = useState(placeholderimage);
  const[HeadsetTag, SetHeadsetTag] = useState('');
  const[ArmourImage, SetArmourImage] = useState(placeholderimage);
  const[ArmourTag, SetArmourTag] = useState('');
  const[RigImage, SetRigImage] = useState(placeholderimage);
  const[RigTag, SetRigTag] = useState('');
  const[BackpackImage, SetBackpackImage] = useState(placeholderimage);
  const[BackpackTag, SetBackpackTag] = useState('');
  const[MedImages, SetMedsImage] = useState(placeholderimage);
  const[MedTag, SetMedTag] = useState('');
  const[StimsImage, SetStimsImage] = useState(placeholderimage);
  const[StimsTag, SetStimsTag] = useState('');
  const[GrenadeImage, SetGrendagesImage] = useState(placeholderimage);
  const[GrenadeTag, SetGrenadeTag] = useState('');
  const[MapImage, SetMapImage] = useState(placeholderimage);
  const[MapTag, SetMapTag] = useState('');
  const[TODImage, SetTODImage] = useState(placeholderimage);
  const[TODTag, SetTODTag] = useState('');
  const[BulletImage, SetBulletImage] = useState(placeholderimage)
  const[BulletImage2, SetBulletImage2] = useState(placeholderimage)
  const[BulletImage3, SetBulletImage3] = useState(placeholderimage)
  const onClick = () => {setPrimaryGunImage(Guns[a = Math.floor(Math.random() * Guns.length)][0]);SetPrimaryGunTag(Guns[a][1]); searchStringInArray(Guns[a][2]); Bulletimagesearch(randombullet);};
  const onClick2 = () =>{setSecondaryGunImage(Guns[a = Math.floor(Math.random() * Guns.length)][0]);SetSecondaryGunTag(Guns[a][1]);searchStringInArray2(Guns[a][2]);Bulletimagesearch2(randombullet2);};
  const onClick3 = () =>{setSidearmImage(sidearm[a = Math.floor(Math.random() * sidearm.length)][0]);SetSidearmGunTag(sidearm[a][1]);searchStringInArray3(sidearm[a][2]);Bulletimagesearch3(randombullet3);};
  const onClick4 = () =>{SetHelmetImage(Helmets[a = Math.floor(Math.random() * Helmets.length)][0]);SetHelmetTag(Helmets[a][1]);};
  const onClick5 = () =>{SetHeadsetImage(headset[a = Math.floor(Math.random() * headset.length)][0]);SetHeadsetTag(headset[a][1]);};
  const onClick6 = () =>{SetArmourImage(armour[a = Math.floor(Math.random() * armour.length)][0]);SetArmourTag(armour[a][1]);};
  const onClick7 = () =>{SetRigImage(rig[a = Math.floor(Math.random() * rig.length)][0]);SetRigTag(rig[a][1]);};
  const onClick8 = () =>{SetBackpackImage(Backpacks[a = Math.floor(Math.random() * Backpacks.length)][0]);SetBackpackTag(Backpacks[a][1]);};
  const onClick9 = () =>{SetMedsImage(meds[a =Math.floor(Math.random() * meds.length)][0]);SetMedTag(meds[a][1]);};
  const onClick10 = () =>{SetStimsImage(Stims[a = Math.floor(Math.random() * Stims.length)][0]); SetStimsTag(Stims[a][1]);};
  const onClick11 = () =>{SetGrendagesImage(grenades[a = Math.floor(Math.random() * grenades.length)][0]); SetGrenadeTag(grenades[a][1]);};
  const onClick12 = () =>{SetMapImage(map[a = Math.floor(Math.random() * map.length)][0]); SetMapTag(map[a][1]);};
  const onClick13 = () =>{SetTODImage(TOD[a = Math.floor(Math.random() * TOD.length)][0]); SetTODTag(TOD[a][1]);};
    
  function searchStringInArray (str) {
    for(var i = 1; i < Bullets.length;i++)
    {
      var ammo = Bullets[i][1];
        if(ammo.includes(str))
        {
        bulletarray.push(ammo);
        }
    }
    ammo = [];
    str = '';
    randombullet = bulletarray[Math.floor(Math.random() * bulletarray.length)]
    bulletarray=[];
    return -1;
  };
  function searchStringInArray2 (str) {
    for(var i = 1; i < Bullets.length;i++)
    {
      var ammo = Bullets[i][1];
        if(ammo.includes(str))
        {
          bulletarray2.push(ammo);
        }
    }
    ammo = [];
    str = '';
    randombullet2 = bulletarray2[Math.floor(Math.random() * bulletarray2.length)]
    bulletarray2 = [];
    return -1;
  };
  function searchStringInArray3 (str) {
    for(var i = 1; i < Bullets.length;i++)
    {
      var ammo = Bullets[i][1];
        if(ammo.includes(str))
        {
          bulletarray3.push(ammo);
        }
    }
    ammo = [];
    str = '';
    randombullet3 = bulletarray3[Math.floor(Math.random() * bulletarray3.length)]
    bulletarray3 = [];
    return -1;
  };

  function Bulletimagesearch(str){
    for(var i = 1; i<Bullets.length;i++)
    {
      var ammo = Bullets[i][1];
      if(ammo.includes(str))
      {
        SetBulletImage(Bullets[i][0]);
      }
    }
    return -1;
  }
  function Bulletimagesearch2(str){
    for(var i = 1; i<Bullets.length;i++)
    {
      var ammo = Bullets[i][1];
      if(ammo.includes(str))
      {
        SetBulletImage2(Bullets[i][0]);
      }
    }
    return -1;
  }
  function Bulletimagesearch3(str){
    for(var i = 1; i<Bullets.length;i++)
    {
      var ammo = Bullets[i][1];
      if(ammo.includes(str))
      {
        SetBulletImage3(Bullets[i][0]);
      }
    }
    return -1;
  }
  return (
      
<div className="Content">
    <div className="Content">
      <div className="Primaryweapon">
      <h2>Primary Weapon</h2>
      <img className={"Primaryweaponimage"} src={PrimaryGunImage} alt="Primary Gun" width="750" height="250"/>
      <p>{PrimaryGunTag}</p>
      <Button color='black' text='Randomize' onClick={onClick}/>
      </div>
      <div className="Secondaryweapon">
      <h2>Secondary Weapon</h2>
      <img className="Secondaryweaponimage" src={SecondaryGunImage} alt="Secondary Gun" width="750" height="250"/>
      <p>{SecondaryGunTag}</p>
      <Button color='black' text='Randomize' onClick={onClick2}/>
      </div>
      <div className="Sidearm">
      <h2>Sidearm</h2>
      <img className="Sidearmimage" src={SidearmGunImage} alt="Sidearm" width="350" height="350"/>
      <p>{SidearmGunTag}</p>
      <Button color='black' text='Randomize'onClick={onClick3}/>
      </div>
      <div className="Bullet">
      <h2>Bullet Types</h2>
      <img className="Bulletimage" src={BulletImage} alt="Bullet type" width="280" height="210"/>
      <img className="Bulletimage" src={BulletImage2} alt="Bullet type" width="280" height="210"/>
      <br></br>
      <img className="Bulletimage" src={BulletImage3} alt="Bullet type" width="310" height="210"/>
      <p>{randombullet}<br></br>  {randombullet2}<br></br>  {randombullet3}</p>
      </div>
      <div className="Helmet">
      <h2>Helmet</h2>
      <img className="Helmetimage"  src={HelmetImage} alt="Helmet" width="350" height="350"/>
      <p>{HelmetTag}</p>
      <Button color='black' text='Randomize' onClick={onClick4}/>
      </div>
      <div className="Headset">
      <h2>Headset</h2>
      <img className="Headsetimage" src={HeadsetImage} alt="Headset" width="350" height="350"/>
      <p>{HeadsetTag}</p>
      <Button color='black' text='Randomize' onClick={onClick5}/>
      </div>
      <div className="Bodyarmour">
      <h2>Body Armour</h2>
      <img className="Armourimage" src={ArmourImage} alt="Body Armour" width="350" height="350"/>
      <p>{ArmourTag}</p>
      <Button color='black' text='Randomize' onClick={onClick6}/>
      </div>
      <div className="Rig">
      <h2>Rig</h2>
      <img className="Rigimage" src={RigImage} alt="Rig" width="350" height="350"/>
      <p>{RigTag}</p>
      <Button color='black' text='Randomize' onClick={onClick7}/>
      </div>
      <div className="Backpack">
      <h2>Backpack</h2>
      <img className="Backpackimage" src={BackpackImage} alt="Backpack" width="350" height="350"/>
      <p>{BackpackTag}</p>
      <Button color='black' text='Randomize' onClick={onClick8}/>
      </div>
      <div className="Meds">
      <h2>Meds</h2>
      <img className="Medsimage" src={MedImages} alt="Meds" width="350" height="350"/>
      <p>{MedTag}</p>
      <Button color='black' text='Randomize' onClick={onClick9}/>
      </div>
      <div className="Stims">
      <h2>Stims</h2>
      <img className="Stimsimage" src={StimsImage} alt="Stims" width="350" height="350"/>
      <p>{StimsTag}</p>
      <Button color='black' text='Randomize' onClick={onClick10}/>
      </div>
      <div className="Grenade">
      <h2>Grenades</h2>
      <img className="Grenadesimage" src={GrenadeImage} alt="Grenades" width="350" height="350"/>
      <p>{GrenadeTag}</p>
      <Button color='black' text='Randomize' onClick={onClick11}/>
      </div>
      <div className="Map">
      <h2>Map</h2>
      <img className="Mapsimage" src={MapImage} alt="Map" width="350" height="350"/>
      <p>{MapTag}</p>
      <Button color='black' text='Randomize' onClick={onClick12}/>
      </div>
      <div className="Timeofday">
      <h2>Time of Day</h2>
      <img className="Timeofdayimage" src={TODImage} alt="Time of day" width="350" height="350"/>
      <p>{TODTag}</p>
      <Button color='black' text='Randomize' onClick={onClick13}/>
      </div>
      </div>
      </div>
          )
        }
        
        export default Content