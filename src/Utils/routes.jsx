import MainPage from "Pages/MainPage";
import SetupPage from "Pages/SetupPage";

const RoutePaths = [
  {
    type: "route",
    name: "Main Page",
    key: "Main",
    route: "/Portfolio-Generator/",
    component: <MainPage />,
  },
  {
    type: "route",
    name: "Setup Page",
    key: "Setup",
    route: "/Portfolio-Generator/Setup",
    component: <SetupPage />,
  },
];

export const getRoute = (key) => {
  return RoutePaths.find((element) => {
    return element.key === key;
  }).route;
};

export default RoutePaths;
