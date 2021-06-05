import React, { useState } from "react";

export default function App() {
    const [items, setItems] = useState([]);
    if(items.length == 0)
        return "No Items.";
    return <DayList items={items} />;
}

function DayList({items}) {
    return(
        <ul>
          {items.map((item, i) => (
              <DayListItem key={i} {...item} />
          ))}
        </ul>
    );
}

function DayListItem({name, is_done}) {
    return(
        <li>
          <input type="checkbox" checked={is_done}/>
          {name}
        </li>);
}

async function fetchDayList() {
    const response = await fetch('/api/list');
    return await response.json();
};

function render(json) {
    ReactDOM.render(
        <DayList items={json} />,
        document.getElementById("root"));
};

//fetchDayList()
//    .then(render)
//    .catch(err => {
//        ReactDOM.render("Error", document.getElementById("root"));
//        console.log(err);
//    });
