import React from 'react'

import useStyles from 'components/Page/Page.style';

const Page = ({ children }) => {
    const classes = useStyles()
    return (<div className={classes.page}>{children}</div>)
}

export default Page