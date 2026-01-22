export interface Alert {
  id: string;
  title: string;
  description: string;
  type: AlertType;
}

type AlertType = "warning" | "error" | "info";

const alerts: Alert[] = [
  {
    id: "1",
    title: "Alert 1",
    description: "Description 1",
    type: "warning",
  },
  {
    id: "2",
    title: "Alert 2",
    description: "Description 2",
    type: "error",
  },
  {
    id: "3",
    title: "Alert 3",
    description: "Description 3",
    type: "info",
  },
  {
    id: "4",
    title: "Alert 4",
    description: "Description 4",
    type: "warning",
  },
  {
    id: "5",
    title: "Alert 5",
    description: "Description 5",
    type: "error",
  },
  {
    id: "6",
    title: "Alert 6",
    description: "Description 6",
    type: "info",
  },
  {
    id: "7",
    title: "Alert 7",
    description: "Description 7",
    type: "warning",
  },
  {
    id: "8",
    title: "Alert 8",
    description: "Description 8",
    type: "error",
  },
  {
    id: "9",
    title: "Alert 9",
    description: "Description 9",
    type: "info",
  },
];

export default alerts;
