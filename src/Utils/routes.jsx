import MainPage from "Pages/MainPage";
import SetupPage from "Pages/SetupPage";

const RoutePaths = [
  {
    type: "route",
    name: "Main Page",
    key: "Main",
    route: "/",
    component: <MainPage />,
  },
  {
    type: "route",
    name: "Setup Page",
    key: "Setup",
    route: "/Setup",
    component: <SetupPage />,
  },
];

export const getRoute = (key) => {
  return RoutePaths.find((element) => {
    return element.key === key;
  }).route;
};

export default RoutePaths;
