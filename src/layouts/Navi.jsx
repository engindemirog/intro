import React from 'react'
import { TabMenu } from 'primereact/tabmenu';

export default function Navi() {
    const items = [
        {label: 'Home', icon: 'pi pi-fw pi-home'},
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
