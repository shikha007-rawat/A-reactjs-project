import "./App.css";
import Container from "./templates/Container";
import Subscription from "./Subscriptionsall/Subscription";
import NewSubscription from "./Subscriptionsall/NewSubscription/NewSubscription";
import Filter from "./Subscriptionsall/Filter";

import { useState } from "react";
const INITIAL_SUBSCRIPTION = [
  {
    id: "1",
    date: new Date("2019", "10", "10"),
    title: " Monthly Subscription",
    amount: "145",
  },
  {
    id: "2",
    date: new Date("2022", "09", "11"),
    title: " weekly- Subscription",
    amount: "359",
  },
  {
    id: "3",
    date: new Date("2021", "06", "10"),
    title: " Yearly Subscription",
    amount: "250",
  },
]


const App = () => {
  const [subscriptions, setSubscriptions] = useState(INITIAL_SUBSCRIPTION)

  const [filteredYear, setFilteredYear] = useState("2020");

  const addSubscriptionHandler = (data) => {
    // subscriptions.push(data);
    setSubscriptions([data, ...subscriptions]);


    console.log("on Add Subscription", data);
  };
  const filterChangeHandler = (data) => {
    setFilteredYear(data);
    console.log("filter change handler", data);
  };
  const filteredSubscriptions = subscriptions.filter((item) => {
    return item.date.getFullYear().toString() === filteredYear
  })
  return (
    <Container>
      <NewSubscription onAddSubscription={addSubscriptionHandler} />
      <Filter
        onFilterChange={filterChangeHandler}
        selectedFilter={filteredYear}
      />

      {filteredSubscriptions.length === 0 ? <h3>No Data Found!</h3> : filteredSubscriptions.map(abc =>
       <Subscription key={abc.id} date={abc.date}
        title={abc.title} amount={abc.amount} />)}



    </Container> 
  );
};
export default App