{
  /* <PANField size="sm" /> */
}
{
  /* <CardHeader > */
}
{
  /* <MenuBar
          fill={`var(--dusky-blue)`}
          onClick={() => setSideBarOpen(!isSideBarOpen)}
          className={isSideBarOpen ? Style.subIconStyle : Style.subIconStyleClose}
          style={{ height: "25px", width: "22px", cursor: "pointer" }}
        /> */
}
{
  /* </CardHeader> */
}

export const headerlist = [
  // { title: "" },
  { title: "Notice View" },
  { title: "OverDue" },
  { title: "Due Today" },
  { title: "Due In 7 Days" },
  { title: "Due In 8-15 Days" },
  { title: "Due After 15 Days" },
];

export const tablelist = [
  {
    title: "Issued Notice u/s 143(1)(a)",
    overDue: 4,
    duetoday: 9,
    due7: 0,
    due8: 7,
    due15: 2,
  },
  {
    title: "Issued Notice u/s 133",
    overDue: 4,
    duetoday: 0,
    due7: 0,
    due8: 10,
    due15: 24,
  },
  {
    title: "Issued Notice u/s 143(1)",
    overDue: 4,
    duetoday: 3,
    due7: 15,
    due8: 10,
    due15: 24,
  },
  {
    title: "Notice u/s 139(9)",
    overDue: 4,
    duetoday: 3,
    due7: 15,
    due8: 10,
    due15: 24,
  },
];

export const headerNoticelist = [
  { title: "Notice No." },
  { title: "Issued Date" },
  { title: "Due Date" },
  { title: "Description" },
  { title: "Current Status" },
  { title: "Edit" },
  { title: "View" },
];

export const tableNoticelist = [
  {
    title: "Issued Notice u/s 143(1)(a)",
    noticeno: 482235323,
    issueddate: "15-Jul-2023",
    duedate: "24-Jul-2023",
    description: "Intemation determining demand",
    currentstatus: "New",
  },
  {
    title: "Issued Notice u/s 133",
    noticeno: 434236865,
    issueddate: "20-Jul-2023",
    duedate: "24-Jul-2023",
    description: "Intemation determining demand",
    currentstatus: "In progress",
  },
  {
    title: "Issued Notice u/s 143(1)",
    noticeno: 482534344,
    issueddate: "21-Jul-2023",
    duedate: "24-Jul-2023",
    description: "Intemation determining demand",
    currentstatus: "Submitted",
  },
  {
    title: "Issued Notice u/s 143(1)",
    noticeno: 4845685397,
    issueddate: "22-Jul-2023",
    duedate: "24-Jul-2023",
    description: "Intemation determining demand",
    currentstatus: "Completed",
  },
];

export const tableNoticeDetails = [
  {
    processdate: "22-Jul-2023",
    actionTaken: "Information gathered from branch",
    Doneby: "Manoj",
    status: "In progress",
  },
  {
    processdate: "22-Jul-2023",
    actionTaken: "verified information from branch",
    Doneby: "Manoj",
    status: "In progress",
  },
  {
    processdate: "22-Jul-2023",
    actionTaken: "Drafted reply on ITD site",
    Doneby: "Manoj",
    status: "In progress",
  },
];

export const headerNoticeDetails = [
  { title: "Processed Date" },
  { title: "Action Taken" },
  { title: "Documents" },
  { title: "Done by" },
  { title: "Status" },
];

export const headerNoticeView = [{ title: "File Name" }, { title: "" }];

export const tableNoticeView = [
  {
    filename: "ReturnReceipt26Q-Q1.pdf",
  },
  {
    filename: "ReturnStats.jpg",
  },
  {
    filename: "InfoFromCBS001.pdf",
  },
];
