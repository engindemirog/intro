import React from 'react'
import { TabMenu } from 'primereact/tabmenu';
import {useNavigate} from "react-router-dom"

export default function Navi() {
   const navigate = useNavigate()  

    const items = [
        {label: 'Home', icon: 'pi pi-fw pi-home', command:(e)=>{navigate('/products')}},
        {label: 'Calendar', icon: 'pi pi-fw pi-calendar'},
        {label: 'Edit', icon: 'pi pi-fw pi-pencil'},
        {label: 'Documentation', icon: 'pi pi-fw pi-file'},
        {label: 'Settings', icon: 'pi pi-fw pi-cog'}
    ];
  return (
    <div>
         <TabMenu model={items} />
    </div>
  )
}
