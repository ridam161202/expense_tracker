import React from 'react';
import { Card, CardHeader, CardContent, Typography } from '@material-ui/core';
import { Doughnut } from 'react-chartjs-2';
import useStyles from './styles';

const Details = ({title}) => {
    const classes = useStyles();
    return (
        <Card className={title === 'income' ? classes.income : classes.expense}>
            <CardHeader title={title}/>
            <CardContent>
                <typography variant="h5">$50</typography>
                <Doughnut data="DATA"/>
            </CardContent>
        </Card>
    )
}

export default Details
