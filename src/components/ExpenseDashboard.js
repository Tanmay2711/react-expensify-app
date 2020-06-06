
import React, { useState, useEffect } from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilter from './ExpenseListFilter';

const CheckBoxItem = (props) => {
    const[isSelect, setIsSelect] = useState(!!props.node.isRequired);
    const onSelected = (isChecked) => {
        setIsSelect(isChecked || !!props.node.isRequired);
        if(props.onSelected && isChecked){
            props.onSelected(isChecked);
        }
    }
    useEffect(() => {
        if(!props.isUnSelected && !props.node.isRequired){
            setIsSelect(false);
        }
    },[props.isUnSelected]);

    return(
        <div>
            <span>{props.node.text}</span><input type="checkbox" onChange={() => {onSelected(!isSelect);}} checked={isSelect} disabled={!!props.node.isRequired}></input>
            <div style={{marginLeft:"30px"}}>
                {
                    props.node.childNodes && props.node.childNodes.map((node,index) =>{
                        return <CheckBoxItem node={node} key={index} isUnSelected={isSelect} onSelected={onSelected}></CheckBoxItem>
                    })
                }
            </div>
        </div>
    );
}

const arr = [
    {
        text:'1.0',
        isRequired:true,
        childNodes:[
            {
                text:'1.1'
            },
            {
                text:'1.2',
                childNodes:[
                    {
                        text:'1.2.1'
                    }
                ]
            }
        ]
    },
    {
        text:'2.0',
        childNodes:[
            {
                text:'2.1',
                childNodes:[
                    {
                        text:'2.1.1'
                    }
                ]
            },
            {
                text:'2.2'
            }
        ]
    }
];

const ExpenseDashboard = () => (
    <div>
        This is from dahsboard page!!
        <ExpenseListFilter />
        <ExpenseList></ExpenseList>
        {
            arr.map((node,index) => {
                return <CheckBoxItem node={node} key={index}></CheckBoxItem>
            })
        }
    </div>
);

export default ExpenseDashboard;