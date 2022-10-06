import React from 'react';
import Employee from './Employee.jsx';

class EmployeeList extends React.Component {
    render(){
        const employees = [
            {
                name: 'Harley',
                position: 'Manager',
            },{
                name: 'Ronald',
                position: 'CEO',
            },{
                name: 'Josue',
                position: 'Salesman',
            }
        ];
        return (
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Position</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map( employee => (
                    <Employee name={employee.name} position={employee.position}/>          
                    ))}
                </tbody>
            </table>
        );
    }
}

export default EmployeeList;