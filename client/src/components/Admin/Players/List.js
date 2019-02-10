import React from 'react'
import { List, Datagrid, TextField, EditButton } from 'react-admin'
import { Badge } from '@material-ui/core'

const PlayerList = props => (
    <List {...props} title="Joueurs" perPage={25}>
        <Datagrid rowClick="edit">
            <TextField source="id" sortable={false}/>
            <TextField source="name" label="Nom"  sortable={false}/>
            <NumbersField source="numbers"  sortable={false}/>
            <EditButton />
        </Datagrid>
    </List>
)

const NumbersField = ({ record = {} }) => {
    let html = []
    record.numbers.split(',').map(number => {
        html.push(<Badge className="badge-lotto-admin" badgeContent={number} color="primary"></Badge>)
        return true
    })
    return html
}

NumbersField.defaultProps = { label: 'Numeros' }

export default PlayerList