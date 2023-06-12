import { MdOutlineAddCircleOutline } from "react-icons/md";
import { Button, useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { ContentBodyContainer, DashboardCardContainer } from "../../home";
import { PowerBIEmbed } from "powerbi-client-react";
import { models } from "powerbi-client";

export const MapsScreen = () => {
  const navigate = useNavigate();

  return (
    <ContentBodyContainer
      title="View Map"
      routesRule={"map"}
    //   rightCardHeaderComponent={
    //     <div className="row g-3 mb-0 align-items-center">
    //       <div className="col-auto">
    //         <Button
    //           colorScheme="teal"
    //           onClick={() => navigate("/farmers/edit")}
    //           leftIcon={
    //             <MdOutlineAddCircleOutline className="svg-dark" size={12} />
    //           }
    //           className={"fw-bold"}
    //           fontSize={"sm"}
    //           backgroundColor={"#7AD0E2"}
    //           color={"#000000"}
    //           borderRadius={0}
    //           padding={"12px 20px"}
    //           _hover={{ bg: "#bbc7ca" }}
    //           transition={"background-color 0.5s ease-in-out"}
    //         >
    //           Edit Household
    //         </Button>
    //       </div>
    //     </div>
    //   }
    >
      <DashboardCardContainer title="" bodyClassName="p-3">
        <PowerBIEmbed
          embedConfig={{
            type: "report",
            id: "249e81c8-dd4f-4018-bf18-556f9f254df9",
            embedUrl:
              "https://app.powerbi.com/reportEmbed?reportId=249e81c8-dd4f-4018-bf18-556f9f254df9&groupId=98c1735c-09d2-471a-87ee-1e1a266a61a0&w=2&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLVNPVVRILUFGUklDQS1OT1JUSC1BLVBSSU1BUlktcmVkaXJlY3QuYW5hbHlzaXMud2luZG93cy5uZXQiLCJlbWJlZEZlYXR1cmVzIjp7Im1vZGVybkVtYmVkIjp0cnVlLCJ1c2FnZU1ldHJpY3NWTmV4dCI6dHJ1ZX19",
            accessToken:
              "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyIsImtpZCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyJ9.eyJhdWQiOiJodHRwczovL2FuYWx5c2lzLndpbmRvd3MubmV0L3Bvd2VyYmkvYXBpIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvZTJhZDg3OWUtMWNhYS00NmFlLWI4Y2QtNGM3YzJkMDI5MmZhLyIsImlhdCI6MTY4NjYwMDc4MiwibmJmIjoxNjg2NjAwNzgyLCJleHAiOjE2ODY2MDU1MjAsImFjY3QiOjAsImFjciI6IjEiLCJhaW8iOiJBVlFBcS84VEFBQUFBZW1jTE4vaFc2UFRKaEVncXVPUjcyWDZzSUR6bWUvQ0k5bjZPS1R0NjlhQVBwZm4xMW9tMk1xZ29CdG9Ob1UxakpBUFR0WkFpUGI1Z21COVdLNHNsdlh1UTVsQ1lqb2h4Zy9WYXkyQ2pVMD0iLCJhbXIiOlsicHdkIiwibWZhIl0sImFwcGlkIjoiODcxYzAxMGYtNWU2MS00ZmIxLTgzYWMtOTg2MTBhN2U5MTEwIiwiYXBwaWRhY3IiOiIwIiwiZmFtaWx5X25hbWUiOiJKb3NodWEiLCJnaXZlbl9uYW1lIjoiT2JvbmdhbnlhbmdhIiwiaXBhZGRyIjoiMTI5LjIwNS4xMjQuMjM5IiwibmFtZSI6Ik9ib25nYW55YW5nYSBKb3NodWEiLCJvaWQiOiIyYThjNzEwZS1iMGE2LTQxZTAtODMxMy1hMDk0OTUyNTcwOTkiLCJwdWlkIjoiMTAwMzIwMDJBQTUyNTlFQiIsInJoIjoiMC5BVTRBbm9ldDRxb2Nya2E0elV4OExRS1MtZ2tBQUFBQUFBQUF3QUFBQUFBQUFBQ0RBSlEuIiwic2NwIjoidXNlcl9pbXBlcnNvbmF0aW9uIiwic2lnbmluX3N0YXRlIjpbImttc2kiXSwic3ViIjoiSW44Skl4dFNWWGtFTGpEelg1UlotVHk5MnBhSGozWkNFazY5YlY3R3pfVSIsInRpZCI6ImUyYWQ4NzllLTFjYWEtNDZhZS1iOGNkLTRjN2MyZDAyOTJmYSIsInVuaXF1ZV9uYW1lIjoiaG9iZWUuakBob2JlZWpjb25zb2xpZGF0ZWQub25taWNyb3NvZnQuY29tIiwidXBuIjoiaG9iZWUuakBob2JlZWpjb25zb2xpZGF0ZWQub25taWNyb3NvZnQuY29tIiwidXRpIjoiT29Pc1B1VnBNMEszS09WOUJwczNBQSIsInZlciI6IjEuMCIsIndpZHMiOlsiNjJlOTAzOTQtNjlmNS00MjM3LTkxOTAtMDEyMTc3MTQ1ZTEwIiwiYjc5ZmJmNGQtM2VmOS00Njg5LTgxNDMtNzZiMTk0ZTg1NTA5Il0sInhtc19wbCI6ImVuIn0.atKwPSKnk1SvZHZDMACm1l6-RcGaK6AckdQIAJTTaF8L_88owdy6fkMYpaAK5yCdQ8X9PWUB9e-k72VxxrrsnJsKvwzLUOZLTn7DQSyiy9GU0oCtSEjMnxYx11lse9GdDdGB_cJqm1RI9ehqZdu8fEfdKGWNeZwZbIXxSh_CfGwlLL_6DpU-6pYqg2wDY4c7DS6nHysGUdO78AI-pqJylKyKYJ9tA6faJSAwjT1eNPjF2ITaGjjrh5XLlGnVeEHhMDEBKogxztY9-Apy6lAxTyTLjq1mXOe9ntfjPfZOIilzXPChRztJmLuxHfKSSgK4SmUS7g2ZupIjX5v0HBZb-A",
            tokenType: models.TokenType.Embed,
            settings: {
              panes: {
                filters: {
                  expanded: false,
                  visible: false,
                },
              },
              filterPaneEnabled: false,
              navContentPaneEnabled: false,
              background: models.BackgroundType.Transparent,
            },
          }}
          eventHandlers={
            new Map([
              [
                "loaded",
                function () {
                  console.log("Report loaded");
                },
              ],
              [
                "rendered",
                function () {
                  console.log("Report rendered");
                },
              ],
            //   [
            //     "error",
            //     function (event) {
            //       console.log(event.detail);
            //     },
            //   ],
              ["visualClicked", () => console.log("visual clicked")],
              ["pageChanged", (event) => console.log(event)],
            ])
          }
          cssClassName={"reportClass"}
          
        />
      </DashboardCardContainer>
    </ContentBodyContainer>
  );
};
