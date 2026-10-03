const equipmentLedger = {
  1: {
    type: "PC",
    status: "CheckedOut",
    borrower: { name: "John Smith", email: "john@acme.org" },
    dueDate: "11/30/2025",
  },
  2: {
    type: "Laptop",
    status: "CheckedIn",
    borrower: { name: "", email: "" },
    dueDate: "",
  },
  3: {
    type: "Laptop",
    status: "CheckedOut",
    borrower: { name: "Jane Doe", email: "jane@acme.org" },
    dueDate: "10/31/2025",
  },
  4: {
    type: "iPad",
    status: "CheckedIn",
    borrower: { name: "", email: "" },
    dueDate: "",
  },
};

function checkoutDevice(ledger, assetTag, borrower) {
  let ledgerCopy = {};
  if (
    Object.hasOwn(ledger, assetTag) &&
    ledger[assetTag]?.status !== "CheckedOut"
  ) {
    const newBorrower = {
      ...ledger[assetTag].borrower,
      name: borrower.name,
      email: borrower.email,
    };
    const newDevice = {
      ...ledger[assetTag],
      borrower: newBorrower,
      status: "CheckedOut",
    };
    ledgerCopy = { ...ledger, [assetTag]: newDevice };

    return {
      ledger: ledgerCopy,
      message: `${assetTag}, ${ledgerCopy[assetTag].borrower.name}`,
    };
  } else if (!Object.hasOwn(ledger, assetTag)) {
    return { ledger: ledger, message: `${assetTag} is missing` };
  } else if (ledger[assetTag]?.status === "CheckedOut") {
    return {
      ledger: ledger,
      message: `${assetTag} is already checked out`,
    };
  }
}

function checkinDevice(ledger, assetTag) {
  let updatedLedger = {};
  if (Object.hasOwn(ledger, assetTag)) {
    const cleanBorrower = {
      ...ledger[assetTag].borrower,
      name: "",
      email: "",
    };

    const newDevice = {
      ...ledger[assetTag],
      borrower: cleanBorrower,
      dueDate: "",
      status: "CheckedIn",
    };

    updatedLedger = { ...ledger, [assetTag]: newDevice };

    return {
      ledger: updatedLedger,
      message: `${assetTag} checked in`,
    };
  } else if (!Object.hasOwn(ledger, assetTag)) {
    return {
      ledger: ledger,
      message: `${assetTag} is not found`,
    };
  }
}

//console.log(checkinDevice(equipmentLedger, "4"));

//pomocna funkcia na transformaciu datumu
function getDateAdjusted(date) {
  const dateArray = date.split("/");
  let year = dateArray[2];
  let month = dateArray[0].padStart(2, "0");
  let day = dateArray[1].padStart(2, "0");

  const connectedYear = year + month + day;
  const yearNum = Number(connectedYear);

  return yearNum;
}

function listOverdueDevices(ledger, today) {
  const arrTransform = Object.values(ledger);

  const filteredArr = arrTransform.filter(
    (elem) =>
      elem.status !== "CheckedIn" &&
      getDateAdjusted(elem.dueDate) < getDateAdjusted(today),
  );

  const sortedArr = filteredArr.sort(
    (a, b) => getDateAdjusted(a.dueDate) - getDateAdjusted(b.dueDate),
  );

  return sortedArr;
}
//console.log(listOverdueDevices(equipmentLedger, "12/1/2025"));

function serializeLedger(ledger) {
  return JSON.stringify(ledger);
}

function loadLedger(json) {
  return JSON.parse(json);
}
