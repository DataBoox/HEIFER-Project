import { ContentBodyContainer } from "../home";
import { FaStore, FaShapes } from "react-icons/fa";
import {
  BsFillPersonCheckFill,
  BsFillPatchCheckFill,
  BsFillWalletFill,
} from "react-icons/bs";
import { MdLocationOn, MdPersonAddAlt1 } from "react-icons/md";
import { useState } from "react";
// import { currencyFormatter } from "utilities";
// import { useGetDashboardStatisticsQuery } from "store/dashboard";
export const DashboardScreen = () => {

// const { data } = useGetDashboardStatisticsQuery();


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
                <h4 className="fs-1 fw-bold text-dark mb-5">
                  {/* {currencyFormatter(data?.data.projects ?? 0)} */} 3
                </h4>
              </div>
            </div>
            {/* end card body */}
          </div>
          {/* end card */}
        </div>
      </div>

      {/* <Modal isOpen={showModal} onClose={handleModalClose} size="xl">
                <ModalOverlay />
                <ModalContent>
                  <ModalHeader>Indicators</ModalHeader>
                  <ModalCloseButton />

                  <ModalBody style={{ padding: 0 }}>
                    <div
                      style={{ position: "relative", paddingBottom: "62.25%" }}
                    >
                      <iframe
                        title="Dashboard"
                        src="https://app.powerbi.com/view?r=eyJrIjoiZTk3NzkxMmUtZGEyMS00OTEzLWI5NmQtNzMxN2YwYTk0YjE4IiwidCI6IjBlNjYxZTk4LTgzNGUtNDkyMC05YzM5LWIzZTU0MmJiNjY2NSIsImMiOjh9&pageName=ReportSection"
                        frameBorder="0"
                        allowFullScreen
                        style={{
                          position: "absolute",
                          top: 0,
                          left: 0,
                          width: "100%",
                          height: "100%",
                        }}
                      ></iframe>
                    </div>
                  </ModalBody>
                </ModalContent>
              </Modal> */}

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
                  Registered Households
                </p>
                <h4 className="fs-1 fw-bold text-dark mb-5">9</h4>
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
                <h4 className="fs-1 fw-bold text-dark mb-5">4</h4>
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
                <h4 className="fs-1 fw-bold text-dark mb-5">...</h4>
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
                <h4 className="fs-1 fw-bold text-dark mb-5">...</h4>
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
                <h4 className="fs-1 fw-bold text-dark mb-5">3</h4>
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
                <h4 className="fs-1 fw-bold text-dark mb-5">0</h4>
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
                <h4 className="fs-1 fw-bold text-dark mb-5">9</h4>
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
                <h4 className="fs-1 fw-bold text-dark mb-5">$1.25</h4>
                <p
                  className="badge bg-light mb-0 fw-light fs-5"
                  style={{ color: "#0BB508" }}
                >
                  <i className="fa-solid fa-arrow-trend-up"></i> 0%
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
                    backgroundColor: "#6274F",
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
                <h4 className="fs-1 fw-bold text-dark mb-5">$2.34</h4>
                <p
                  className="badge bg-light mb-0 fw-light fs-5"
                  style={{ color: "#0BB508" }}
                >
                  <i className="fa-solid fa-arrow-trend-up"></i> 0%
                </p>
              </div>
            </div>
            {/* end card body */}
          </div>
          {/* end card */}
        </div>
      </div>

      <div className="col-xl-12 col-md-12 mb-4">
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
            title="Indicators"
            src="https://app.powerbi.com/view?r=eyJrIjoiYjhkMjk4ODktZjY2YS00MWZmLWI0NjMtYWI2ZDE1YjMwYmNhIiwidCI6ImUyYWQ4NzllLTFjYWEtNDZhZS1iOGNkLTRjN2MyZDAyOTJmYSJ9"
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

      <div className="col-xl-12 col-md-12 mb-4">
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
            title="Dashboard_1"
            src="https://app.powerbi.com/view?r=eyJrIjoiZmE1ZTI4MmMtMWU2NS00YmU5LWFhMzQtYTkzYjliNzc5ZmEyIiwidCI6ImUyYWQ4NzllLTFjYWEtNDZhZS1iOGNkLTRjN2MyZDAyOTJmYSJ9"
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

      <div className="col-xl-12 col-md-12 mb-4">
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
            title="Dashboard_2"
            src="https://app.powerbi.com/view?r=eyJrIjoiMzJmYWMxM2QtZTNiYy00ODRhLThlMDktZWNjZjc2OTgyNmFkIiwidCI6ImUyYWQ4NzllLTFjYWEtNDZhZS1iOGNkLTRjN2MyZDAyOTJmYSJ9"
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
    </ContentBodyContainer>
  );
};
