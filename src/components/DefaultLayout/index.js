import React, {useMemo} from 'react';
import PropTypes from 'prop-types';
import DashboardLayout from "./DashboardLayout";
import MainLayout from "./MainLayout";
import {useRouter} from "next/router";

const DefaultLayout = ({children}) => {
    const Router = useRouter();
    const path = useMemo(()=>Router?.pathname,[Router?.pathname]);

    const notLoginPages = ['/login']
    return (
        <React.Fragment>
            {
                notLoginPages.includes(path) ? <MainLayout children={children}/> :
                    <DashboardLayout children={children}/>
            }
        </React.Fragment>
    );
};

DefaultLayout.propTypes = {
    children: PropTypes.node,
};

export default DefaultLayout;
