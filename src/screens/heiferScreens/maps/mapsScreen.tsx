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
        {/* <PowerBIEmbed
          embedConfig={{
            type: "report",
            id: "249e81c8-dd4f-4018-bf18-556f9f254df9",
            embedUrl:
              "https://app.powerbi.com/reportEmbed?reportId=249e81c8-dd4f-4018-bf18-556f9f254df9&groupId=98c1735c-09d2-471a-87ee-1e1a266a61a0&w=2&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLVNPVVRILUFGUklDQS1OT1JUSC1BLVBSSU1BUlktcmVkaXJlY3QuYW5hbHlzaXMud2luZG93cy5uZXQiLCJlbWJlZEZlYXR1cmVzIjp7Im1vZGVybkVtYmVkIjp0cnVlLCJ1c2FnZU1ldHJpY3NWTmV4dCI6dHJ1ZX19",
            accessToken:
              "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyIsImtpZCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyJ9.eyJhdWQiOiJodHRwczovL2FuYWx5c2lzLndpbmRvd3MubmV0L3Bvd2VyYmkvYXBpIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvZTJhZDg3OWUtMWNhYS00NmFlLWI4Y2QtNGM3YzJkMDI5MmZhLyIsImlhdCI6MTY4NjYwOTQ4MywibmJmIjoxNjg2NjA5NDgzLCJleHAiOjE2ODY2MTQzODIsImFjY3QiOjAsImFjciI6IjEiLCJhaW8iOiJBVlFBcS84VEFBQUErb2NocGFIZll0TFEveUNXMXpxcHBXT0NpSlpZUi9XUGtEdks5V2o1bXEwSG9nSVI3WXhFc2xEalJTbzBlOS9QblUrVWJ6MkZJK3ZFM0dRNGlERWJSSUN0TzVCM1JMYWpickZLQ3B0MWRJYz0iLCJhbXIiOlsicHdkIiwibWZhIl0sImFwcGlkIjoiODcxYzAxMGYtNWU2MS00ZmIxLTgzYWMtOTg2MTBhN2U5MTEwIiwiYXBwaWRhY3IiOiIyIiwiZmFtaWx5X25hbWUiOiJKb3NodWEiLCJnaXZlbl9uYW1lIjoiT2JvbmdhbnlhbmdhIiwiaXBhZGRyIjoiMTI5LjIwNS4xMjQuMjM5IiwibmFtZSI6Ik9ib25nYW55YW5nYSBKb3NodWEiLCJvaWQiOiIyYThjNzEwZS1iMGE2LTQxZTAtODMxMy1hMDk0OTUyNTcwOTkiLCJwdWlkIjoiMTAwMzIwMDJBQTUyNTlFQiIsInJoIjoiMC5BVTRBbm9ldDRxb2Nya2E0elV4OExRS1MtZ2tBQUFBQUFBQUF3QUFBQUFBQUFBQ0RBSlEuIiwic2NwIjoidXNlcl9pbXBlcnNvbmF0aW9uIiwic2lnbmluX3N0YXRlIjpbImttc2kiXSwic3ViIjoiSW44Skl4dFNWWGtFTGpEelg1UlotVHk5MnBhSGozWkNFazY5YlY3R3pfVSIsInRpZCI6ImUyYWQ4NzllLTFjYWEtNDZhZS1iOGNkLTRjN2MyZDAyOTJmYSIsInVuaXF1ZV9uYW1lIjoiaG9iZWUuakBob2JlZWpjb25zb2xpZGF0ZWQub25taWNyb3NvZnQuY29tIiwidXBuIjoiaG9iZWUuakBob2JlZWpjb25zb2xpZGF0ZWQub25taWNyb3NvZnQuY29tIiwidXRpIjoia3BQQkV3cE9DMGlwUl9kX0M4NHZBQSIsInZlciI6IjEuMCIsIndpZHMiOlsiNjJlOTAzOTQtNjlmNS00MjM3LTkxOTAtMDEyMTc3MTQ1ZTEwIiwiYjc5ZmJmNGQtM2VmOS00Njg5LTgxNDMtNzZiMTk0ZTg1NTA5Il0sInhtc19wbCI6ImVuIn0.VSZWLDZ5TCei8Yz1-pWlHhF3S4BSqP9erfynjGsEq7nh5B5Jn05qIXFfKNxMYh0-SIYLWaFIh_cmfK3_0iDlBgcZDzNLQF80XGrgx4WEPJETmspWyTa9mmUZ-qkoP5RJnbaiYzuYTkJc7nAVcgL5xCXSYez_FiVDfIQM9SzQL7VEl9Ao_XU4CIhccWc2PwOOHKsNnMF7_W4wTjNcXJFu5_EQm8w_XDaApyvKMmM0iLD5GGmE9iZAFdo2z7vzTcGDUMzybIxiBXuudjNNYOxKek4OtU2KIYHKbKU36uPRGwbpvdw8CNTKltOwRrgVbM2koddxxZ5fWg8IcaqScjsmng",
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
              ["pageChanged", (event: any) => console.log(event)],
            ])
          }
          cssClassName={"reportClass"}
        /> */}
         <div className="col-xl-12 col-md-12">
        <div
          className="animate"
          style={{
            position: "relative",
            paddingBottom: "56.25%",
            height: 0,
            overflow: "hidden",
            borderRadius: "10px",
          }}
        >
          <iframe
            title="Map_DB"
            src="https://app.powerbi.com/reportEmbed?reportId=4ea03f94-adb2-4c9f-ba7b-886e5fc56285&autoAuth=true&ctid=da6a69e3-3bcd-4f44-a340-aead0cfda08f"
            allowFullScreen
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              border: "none",
            }}
          ></iframe>
        </div>
      </div>
      </DashboardCardContainer>
    </ContentBodyContainer>
  );
};
