import React from 'react';
import AlertSuccess from '../../AlertSuccess';
import H1 from '../../H1';
import Row from './Row';
import H2 from '../../H2';
import Info from './Info';
import Adverts from './Adverts';
import ChangePhone from './ChangePhone';
import ChangeEmail from './ChangeEmail';

function Main() {
    return (
        <main>        
            <AlertSuccess message='Изменения сохранены' />
            <Info />        
            <ChangePhone />
            <ChangeEmail />
            <Adverts />        
        </main>

    );
}

export default Main;