job = {
  "headline": "Full Stack Software Developer",
  "essentials": {
    "locations": "denver",
    "employment": EmploymentType().Permanent,
    "experience": [ExperienceLevels().Junior, ExperienceLevels().Seasoned],
    "startdate": (new Date()).getTime(),
    "companysize": CompanySize().TwentyToFifty,
    "teamsize": { "min": 1, "max": 6 },
  },
  "methodology": {
    "Code reviews": true,
    "Prototyping": true,
    "Pair programming": true,
    "Failfast": true,
    "Unit tests": true,
    "Integration tests": true,
    "Build server": BuildServers().Codeship,
    "Static code analysis": CodeAnalysisTools().NotYetChosen,
    "Version control": VersionControlSystem().BitBucket,
    "Issue tracker": IssueTrackers().Jira,
    "Knowledge repo": KnowledgeRepos().Confluence,
    "Standups": true,
    "QA protocol": true,
    "Freedom over tools": true,
    "One command build": true,
    "Quickstart": true,
    "Commit on day one": true,
  },
  "specs": {
    "Workload": 1.0,
    "Workweek": 40,
    "Core hours": { from: 0800, to: 1700 },
    "Schedule": ScheduleOptions().Flexible,
    "Remote": RemoteWorking().Negotiable,
    "PTO": PTO().Unlimited
  },
  "profile": {
    "New features": 50,
    "Client support": 9,
    "Documentation": 10,
    "Maintenance": 30,
    "Meetings": 1
  },
  "equipment": {
    "Operating system": [OperationSystems().MacOSX, OperationSystems().CentOS],
    "Computer": MachineType().Laptop,
    "Monitors": Monitors().Negotiable,
  },
  "technologies": {
    "junior": {
      "CSS3": Level().Good,
      "HTML5": Level().Good,
      "Javascript": Level().Good,
      "Node": Level().Good,
      "REST": Level().Good,
      "UI/UX": Level().Familiar,
      "Design": Level().Familiar,
      "Testing": {
        "oneof": {
          "JUnit": Level().Good,
          "Mocha": Level().Good,
          "Jasmine": Level().Good,
          "Selenium": Level().Good,
        }
      },
      "Framework": {
        "oneof": {
          "React": Level().Familiar,
          "Vue": Level().Familiar,
          "Angular": Level().Familiar,
        }
      },
      "Board games": Level().Familiar,
    },
    "seasoned": {
      "CSS3": Level().Expert,
      "HTML5": Level().Expert,
      "Javascript": Level().Expert,
      "Node": Level().Expert,
      "REST": Level().Expert,
      "UI/UX": Level().Good,
      "Design": Level().Good,
      "Testing": {
        "oneof": {
          "JUnit": Level().Good,
          "Mocha": Level().Good,
          "Jasmine": Level().Good,
          "Selenium": Level().Good,
        }
      },
      "Framework": {
        "oneof": {
          "React": Level().Familiar,
          "Vue": Level().Familiar,
          "Angular": Level().Familiar,
        }
      },
      "Board games": Level().Familiar,
    }

  },
  "bonuspoints": {
    "Devops": Level().Good,
    "SQL": Level().Good,
    "Mobile development": Level().Good,
    "Quoting bad action movies": Level().Expert
  },
  "other": [
    "we love technology",
    "we solve interesting problems"
  ],
  "misc": {
    "Training": TrainingType().Informal,
    "Team events": true,
    "Ecopass": true,
    "Health care": true,
    "Dental": true,
    "Mobile phone": false,
    "Kitchen": true,
    "Free stuff": ["coffee (lots)", "beverages (adult and otherwise)", "snacks", "bike parking"],
  }
};


function EmploymentType() { return enumerate("Permanent", "Temporary", "Project"); }
function ExperienceLevels() { return enumerate("Junior", "Seasoned", "Lead", "GrayBeard"); }
function CompanySize() { return enumerate("LessThanTen", "TenToTwenty", "TwentyToFifty", "FiftyToTwoHundred", "MoreThanTwoHundred"); }
function VersionControlSystem() { return enumerate("NotYetChosen", "Git", "BitBucket"); }
function IssueTrackers() { return enumerate("NotYetChosen", "GitHub", "Jira"); }
function BuildServers() { return enumerate("NotYetChosen", "Jenkins", "Travis", "Codeship"); }
function CodeAnalysisTools() { return enumerate("NotYetChosen", "ESLint"); }
function KnowledgeRepos() { return enumerate("NotYetChosen", "GitHubWiki", "Confluence"); }
function TravelOptions() { return enumerate("None", "Possible", "Plentiful"); }
function ScheduleOptions() { return enumerate("Fixed", "Flexible"); }
function RemoteWorking() { return enumerate("No", "Negotiable", "Required"); }
function RelocationPackages() { return enumerate("Nonealse", "Negotiable"); }
function OperationSystems() { return enumerate("MacOSX", "CentOS", "Ubuntu", "Windows"); }
function MachineType() { return enumerate("Workstation", "Laptop"); }
function Monitors() { return enumerate("Negotiable"); }
function Level() { return enumerate("Familiar", "Good", "Expert"); }
function TrainingType() { return enumerate("None", "Informal", "Formal", "External"); }
function PTO() { return enumerate("Accrued", "Unlimited"); }
// https://github.com/RougeWare/Micro-JS-Enum/tree/master/lib
function enumerate() { v=arguments;s={all:[],keys:v};for(i=v.length;i--;)s[v[i]]=s.all[i]=v[i];return s; }
