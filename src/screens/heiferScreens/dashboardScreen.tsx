import { ContentBodyContainer } from "../home";
import { FaStore, FaShapes } from "react-icons/fa";
import {
  BsFillPersonCheckFill,
  BsFillPatchCheckFill,
  BsFillWalletFill,
} from "react-icons/bs";
import { MdLocationOn, MdPersonAddAlt1 } from "react-icons/md";

export const DashboardScreen = () => {

  // console.log(data)

  return (
    <ContentBodyContainer title="">
      {/*end col*/}

      <div className="col-xl-3 col-md-6">
        {/* card */}
        <div className="card card-animate">
          <div className="card-body">
            <div className="d-flex align-items-center justify-content-between">
              <div className="avatar-sm flex-shrink-0 mt-5">
                <div
                  style={{
                    backgroundColor: "red",
                    borderRadius: "50%",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "48px",
                    height: "48px",
                  }}
                >
                  <FaShapes size={24} className="svg-light" />
                </div>
              </div>
              <div className="flex-grow-1 overflow-hidden text-end">
                <p className="fs-5 fw-medium text-dark text-truncate mb-3">
                  {" "}
                  No. of Projects
                </p>
                <h4 className="fs-1 fw-bold text-dark mb-4">3</h4>
                <p
                  className="badge bg-light mb-0 fw-light text-decoration-underline"
                  style={{ color: "#0BB508" }}
                >
                  View Indicators
                </p>
              </div>
            </div>
            {/* end card body */}
          </div>
          {/* end card */}
        </div>
      </div>

      <div className="col-xl-3 col-md-6">
        {/* card */}
        <div className="card card-animate">
          <div className="card-body">
            <div className="d-flex align-items-center justify-content-between">
              <div className="avatar-sm flex-shrink-0 mt-5">
                <div
                  style={{
                    backgroundColor: "#0BB508",
                    borderRadius: "50%",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "48px",
                    height: "48px",
                  }}
                >
                  <BsFillPersonCheckFill size={24} className="svg-light" />
                </div>
              </div>
              <div className="flex-grow-1 overflow-hidden text-end">
                <p className="fs-5 fw-medium text-dark text-truncate mb-3">
                  {" "}
                  Register Participants
                </p>
                <h4 className="fs-1 fw-bold text-dark mb-5">10</h4>
              </div>
            </div>
            {/* end card body */}
          </div>
          {/* end card */}
        </div>
      </div>

      <div className="col-xl-3 col-md-6">
        {/* card */}
        <div className="card card-animate">
          <div className="card-body">
            <div className="d-flex align-items-center justify-content-between">
              <div className="avatar-sm flex-shrink-0 mt-5">
                <div
                  style={{
                    backgroundColor: "#2A4153",
                    borderRadius: "50%",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "48px",
                    height: "48px",
                  }}
                >
                  <MdLocationOn size={24} className="svg-light" />
                </div>
              </div>
              <div className="flex-grow-1 overflow-hidden text-end">
                <p className="fs-5 fw-medium text-dark text-truncate mb-3">
                  {" "}
                  States Covered
                </p>
                <h4 className="fs-1 fw-bold text-dark mb-5">5</h4>
              </div>
            </div>
            {/* end card body */}
          </div>
          {/* end card */}
        </div>
      </div>

      <div className="col-xl-3 col-md-6">
        {/* card */}
        <div className="card card-animate">
          <div className="card-body">
            <div className="d-flex align-items-center justify-content-between">
              <div className="avatar-sm flex-shrink-0 mt-5">
                <div
                  style={{
                    backgroundColor: "#B97964",
                    borderRadius: "50%",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "48px",
                    height: "48px",
                  }}
                >
                  <MdLocationOn size={24} className="svg-light" />
                </div>
              </div>
              <div className="flex-grow-1 overflow-hidden text-end">
                <p className="fs-5 fw-medium text-dark text-truncate mb-3">
                  {" "}
                  LGAs Covered
                </p>
                <h4 className="fs-1 fw-bold text-dark mb-5">48</h4>
              </div>
            </div>
            {/* end card body */}
          </div>
          {/* end card */}
        </div>
      </div>

      <div className="col-xl-3 col-md-6">
        {/* card */}
        <div className="card card-animate">
          <div className="card-body">
            <div className="d-flex align-items-center justify-content-between">
              <div className="avatar-sm flex-shrink-0 mt-5">
                <div
                  style={{
                    backgroundColor: "#48A0FF",
                    borderRadius: "50%",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "48px",
                    height: "48px",
                  }}
                >
                  <FaStore size={24} className="svg-light" />
                </div>
              </div>
              <div className="flex-grow-1 overflow-hidden text-end">
                <p className="fs-5 fw-medium text-dark text-truncate mb-3">
                  {" "}
                  Communities Covered
                </p>
                <h4 className="fs-1 fw-bold text-dark mb-5">209</h4>
              </div>
            </div>
            {/* end card body */}
          </div>
          {/* end card */}
        </div>
      </div>

      <div className="col-xl-3 col-md-6">
        {/* card */}
        <div className="card card-animate">
          <div className="card-body">
            <div className="d-flex align-items-center justify-content-between">
              <div className="avatar-sm flex-shrink-0 mt-5">
                <div
                  style={{
                    backgroundColor: "#FFD914",
                    borderRadius: "50%",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "48px",
                    height: "48px",
                  }}
                >
                  <MdPersonAddAlt1 size={24} className="svg-light" />
                </div>
              </div>
              <div className="flex-grow-1 overflow-hidden text-end">
                <p className="fs-5 fw-medium text-dark text-truncate mb-3">
                  {" "}
                  No. of SH Groups
                </p>
                <h4 className="fs-1 fw-bold text-dark mb-5">50</h4>
              </div>
            </div>
            {/* end card body */}
          </div>
          {/* end card */}
        </div>
      </div>

      <div className="col-xl-3 col-md-6">
        {/* card */}
        <div className="card card-animate">
          <div className="card-body">
            <div className="d-flex align-items-center justify-content-between">
              <div className="avatar-sm flex-shrink-0 mt-5">
                <div
                  style={{
                    backgroundColor: "#B00074",
                    borderRadius: "50%",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "48px",
                    height: "48px",
                  }}
                >
                  <BsFillPatchCheckFill size={24} className="svg-light" />
                </div>
              </div>
              <div className="flex-grow-1 overflow-hidden text-end">
                <p className="fs-5 fw-medium text-dark text-truncate mb-3">
                  {" "}
                  Intervention Administered
                </p>
                <h4 className="fs-1 fw-bold text-dark mb-5">30,700</h4>
              </div>
            </div>
            {/* end card body */}
          </div>
          {/* end card */}
        </div>
      </div>

      <div className="col-xl-3 col-md-6">
        {/* card */}
        <div className="card card-animate">
          <div className="card-body">
            <div className="d-flex align-items-center justify-content-between">
              <div className="avatar-sm flex-shrink-0 mt-5">
                <div
                  style={{
                    backgroundColor: "#7F8C9F",
                    borderRadius: "50%",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "48px",
                    height: "48px",
                  }}
                >
                  <FaStore size={24} className="svg-light" />
                </div>
              </div>
              <div className="flex-grow-1 overflow-hidden text-end">
                <p className="fs-5 fw-medium text-dark text-truncate mb-3">
                  {" "}
                  Team Members
                </p>
                <h4 className="fs-1 fw-bold text-dark mb-5">25</h4>
              </div>
            </div>
            {/* end card body */}
          </div>
          {/* end card */}
        </div>
      </div>

      <div className="col-xl-6 col-md-6">
        {/* card */}
        <div className="card card-animate">
          <div className="card-body">
            <div className="d-flex align-items-center justify-content-between">
              <div className="avatar-sm flex-shrink-0 mt-5">
                <div
                  style={{
                    backgroundColor: "#7AD0E2",
                    borderRadius: "50%",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "48px",
                    height: "48px",
                  }}
                >
                  <BsFillWalletFill size={24} className="svg-light" />
                </div>
              </div>
              <div className="flex-grow-1 overflow-hidden text-end">
                <p className="fs-5 fw-medium text-dark text-truncate mb-3">
                  {" "}
                  Annual Income
                </p>
                <h4 className="fs-1 fw-bold text-dark mb-5">73,276,931.28</h4>
                <p
                  className="badge bg-light mb-0 fw-light fs-5"
                  style={{ color: "#0BB508" }}
                >
                  <i className="fa-solid fa-arrow-trend-up"></i> 11.2%
                </p>
              </div>
            </div>
            {/* end card body */}
          </div>
          {/* end card */}
        </div>
      </div>

      <div className="col-xl-6 col-md-6">
        {/* card */}
        <div className="card card-animate">
          <div className="card-body">
            <div className="d-flex align-items-center justify-content-between">
              <div className="avatar-sm flex-shrink-0 mt-5">
                <div
                  style={{
                    backgroundColor: "#12274F",
                    borderRadius: "50%",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "48px",
                    height: "48px",
                  }}
                >
                  <BsFillWalletFill size={24} className="svg-light" />
                </div>
              </div>
              <div className="flex-grow-1 overflow-hidden text-end">
                <p className="fs-5 fw-medium text-dark text-truncate mb-3">
                  {" "}
                  Living Income Benchmark
                </p>
                <h4 className="fs-1 fw-bold text-dark mb-5">3,214,628.45</h4>
                <p
                  className="badge bg-light mb-0 fw-light fs-5"
                  style={{ color: "#0BB508" }}
                >
                  <i className="fa-solid fa-arrow-trend-up"></i> 11.2%
                </p>
              </div>
            </div>
            {/* end card body */}
          </div>
          {/* end card */}
        </div>
      </div>
    </ContentBodyContainer>
  );
};
