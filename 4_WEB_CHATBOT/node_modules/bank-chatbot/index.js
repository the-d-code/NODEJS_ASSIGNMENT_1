const readline = require("readline")

let bank = {
  established_year: 1985,
  name: "The Varacha Bank",
  cities: ["surat", "ahemdabad", "navsari", "baroda", "bharuch"],
  founder: "kanjibhai bhalala",
  total_branches: 15,
  interest_rates: {
    savings: 4.5,
    current: 0,
    FD: {
      upto_1_years: 6,
      upto_3_years: 6.5,
      upto_5_years: 7,
      above_5_years: 7.2,
    },
  },
  timing: {
    morning: "9 to 12.30",
    afternoon: "1 to 5",
  },
  min_balance: {
    savings: 2000,
    current: 0
  }
};

var qa = [
  {
    q: "how are you",
    a: "I Am Fine",
  },
  {
    q: "how many branches bank have",
    a: "bank have total " + bank.total_branches + " branches.",
  },
  {
    q: "when did bank was established?",
    a: "Bank Was Established In Year " + bank.established_year,
  },
  {
    q: "what are interest rates?",
    a: `Interest Rate Details: 
    saving account: ${bank.interest_rates.savings} %(annually)
    current account: ${bank.interest_rates.current} %(annually)
    Fixed Deposits: 
    upto 1 years: ${bank.interest_rates.FD.upto_1_years}
    upto 3 years: ${bank.interest_rates.FD.upto_3_years}
    upto 5 years: ${bank.interest_rates.FD.upto_5_years}
    above 5 years: ${bank.interest_rates.FD.above_5_years}`,
  },
  {
    q: "what is timing of bank?",
    a: `Timing Details: 
    morning: ${bank.timing.morning}
    afternoon: ${bank.timing.afternoon}
    NOTE: Bank Will Remain Close On Public Holidays including 2nd and 4th saturday of month.`,
  },
  {
    q: "minimum balance details",
    a: `Minimum Balance Details: 
    for savings account: ${bank.min_balance.savings}
    for current account: ${bank.min_balance.current}
    NOTE: Bank Have Rights To Charge Whenever Your Balance Is Under Minimum Balance`,
  },
];

module.exports.reply = function (message) {
  if (
    message.indexOf("hi") > -1 ||
    message.indexOf("hello") > -1 ||
    message.indexOf("welcome") > -1
  ) {
    return "Hi!";
  } else if (
    message.indexOf("established") > -1 ||
    message.indexOf("when") > -1
  ) {
    return "Bank was Established In Year " + bank.established_year;
  } else if (
    message.indexOf("how") > -1 &&
    message.indexOf("are") &&
    message.indexOf("you")
  ) {
    return "I'm fine ^_^";
  } else if (message === 'exit') {
    process.exit();
  }
  else {
    let res = qa.find(({ q }) => q.includes(message));

    if (res !== undefined) {
      return res.a;
    } else {
      return "Sorry, I didn't get it :( ";
    }
  }
};


var r1 = readline.createInterface(process.stdin, process.stdout)
r1.setPrompt("You=>");
r1.prompt()

r1.on('line', (msg) => {
  console.log("Bot==> " + this.reply(msg))
  r1.prompt();
}).on('close', () => {
  process.exit();
})