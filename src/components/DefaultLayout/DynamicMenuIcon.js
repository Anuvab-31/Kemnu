import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Avatar } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyle = makeStyles(() => ({
    root: {
        height: '20px',
        width: '20px',
    },
}));

const DynamicMenuIcon = ({ menu, ...props }) => {
    const { icon = {}, materialIconName, isMaterialIcon, name } = menu;
    const classes = useStyle();

    const [icons, setIcons] = useState(null);

    useEffect(() => {
        import('@mui/icons-material').then((icons) => {
            setIcons(icons);
        });
        // .catch(console.log);
    }, []);

    if (isMaterialIcon) {
        if (!icons) return '';
        const Icon = icons[materialIconName] || null;
        if (!Icon) return <Avatar alt={name ? Language.convert(name) : 'menu-image'} src={undefined} {...props} />;
        return <Icon {...props} />;
    }

    return <Avatar alt={name ? name : 'menu-image'} className={classes.root} src={icon.path} {...props} />;
};

DynamicMenuIcon.propTypes = {
    menu: PropTypes.object.isRequired,
};

export default DynamicMenuIcon;
