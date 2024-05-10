import React from 'react'
import SidebarElement from '../../components/sidebarelement/SidebarElement'
import UsersList from '../../components/userslist/UsersList'

const Sidebar = () => {
  return (
    <aside className="col-md-4">
        <SidebarElement sectionTitle={'Altri profili simili'} levelTitle={'h6'}>
            <UsersList />
        </SidebarElement>
    </aside>
  )
}

export default Sidebar