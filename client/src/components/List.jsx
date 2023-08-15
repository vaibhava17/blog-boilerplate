import React from 'react'

const List = (props) => {
  const { dataSource = [], renderItem = () => null } = props;
  return (
    <ul>
      {dataSource.length > 0 ? dataSource.map((item, index) => {
        return <li key={index}>{renderItem(item, index) || item.title}</li>
      }) : "No Data"}
    </ul>
  )
}

export default List