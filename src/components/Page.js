import React, { forwardRef } from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';



const component = ({
                       children,
                       title = '',
                       ...rest
                   }, ref) => {
    return (
        <div
            ref={ref}
            {...rest}
        >
            <Helmet>
                <title>{title}</title>
            </Helmet>
            {children}
        </div>
    );
};

const Page = forwardRef(component);

Page.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string
};

export default Page;
