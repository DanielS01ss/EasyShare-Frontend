import "../../Styles/MainPageStyle.css";

import React, { useState } from "react";

import ExcelLogo from "../../Media/excel-logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Modal } from "../Modal/Modal.js";
import { Button } from "@mui/material";
import PPTLogo from "../../Media/ppt-logo.png";
import { SuccessModal } from "../SuccessModal/SuccessModal";
import WordLogo from "../../Media/word-logo.png";
import {
  faArrowRight,
  faLink,
  faArrowUp,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const MainDashboardPannel = () => {
  const navigate = useNavigate();
  const [displaySuccessModal, setDisplaySuccessModal] = useState(false);
  const [displayUploadModal, setDisplayUploadModal] = useState(false);
  const [fileType, setFileType] = useState("ppt");

  const callUploadModal = (fileType) => {
    if (fileType === "ppt") {
      setFileType("ppt");
    } else if (fileType === "docx") {
      setFileType("docx");
    } else if (fileType === "excel") {
      setFileType("excel");
    }

    setDisplayUploadModal(true);
  };

  return (
    <div className="pt-40 max-w-[1000px] mx-auto pb-20">
      {displayUploadModal && (
        <Modal
          fileType={fileType}
          handleOpenSuccessModal={() => {
            setDisplaySuccessModal(true);
            setDisplayUploadModal(false);
          }}
          handleCloseModal={() => {
            setDisplaySuccessModal(false);
            setDisplayUploadModal(false);
          }}
        />
      )}
      {displaySuccessModal && (
        <SuccessModal
          handleUploadAnother={() => {
            setDisplaySuccessModal(false);
            setDisplayUploadModal(true);
          }}
          handleCloseModal={() => {
            setDisplaySuccessModal(false);
            setDisplayUploadModal(false);
          }}
        />
      )}
      <div className="flex justify-center ">
        <div className="block p-6 rounded-lg shadow-lg bg-white max-w-4xl">
          <h5 className="text-gray-900 text-xl leading-tight font-medium mb-2">
            Welcome UserName
          </h5>

          <div className="px-6 pt-2 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              Documents uploaded: 0
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              Total Size of Documents: 0MB
            </span>
          </div>

          <Button
            variant="contained"
            onClick={() => {
              navigate("/app/manage-links");
            }}
          >
            Manage Links <FontAwesomeIcon icon={faLink} className="ml-2" />
          </Button>
          <div className="pt-20 px-10">
            <p
              style={{ position: "relative", float: "left" }}
              className=" font-bold"
            >
              PPT Documents
            </p>
            <img src={PPTLogo} />
            <p className="text-gray-700 text-base mb-4">
              You can see here all your ppt documents that you have uploaded!
            </p>
            <div className="px-6 pt-2 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                Documents uploaded: 0
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                Total Size of Documents: 0MB
              </span>
            </div>

            <div className="flex flex-row justify-evenly">
              <button
                type="button"
                onClick={() => {
                  navigate("/app/document-list?type=powerpoint");
                }}
                className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-md leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
              >
                See All PPT Documents <FontAwesomeIcon icon={faArrowRight} />
              </button>
              <button
                type="button"
                onClick={() => {
                  callUploadModal("ppt");
                }}
                className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-md leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
              >
                Upload File <FontAwesomeIcon icon={faArrowUp} />
              </button>
            </div>
          </div>

          <div className="pt-20 px-10">
            <p
              style={{ position: "relative", float: "left" }}
              className=" font-bold"
            >
              Word Documents
            </p>
            <img src={WordLogo} />
            <p className="text-gray-700 text-base mb-4">
              You can see here all your word documents that you have uploaded!
            </p>
            <div className="px-6 pt-2 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                Documents uploaded: 0
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                Total Size of Documents: 0MB
              </span>
            </div>
            <div className="flex flex-row justify-evenly">
              <button
                type="button"
                onClick={() => {
                  navigate("/app/document-list?type=word");
                }}
                className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-md leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
              >
                See All Word Documents <FontAwesomeIcon icon={faArrowRight} />
              </button>
              <button
                type="button"
                onClick={() => {
                  callUploadModal("docx");
                }}
                className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-md leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
              >
                Upload File <FontAwesomeIcon icon={faArrowUp} />
              </button>
            </div>
          </div>

          <div className="pt-20 px-10">
            <p
              style={{ position: "relative", float: "left" }}
              className=" font-bold"
            >
              Excel Documents
            </p>
            <img src={ExcelLogo} />
            <p className="text-gray-700 text-base mb-4">
              You can see here all your excel documents that you have uploaded!
            </p>
            <div className="px-6 pt-2 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                Documents uploaded: 0
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                Total Size of Documents: 0MB
              </span>
            </div>
            <div className="flex flex-row justify-evenly">
              <button
                type="button"
                onClick={() => {
                  navigate("/app/document-list?type=excel");
                }}
                className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-md leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
              >
                See All Excel Documents <FontAwesomeIcon icon={faArrowRight} />
              </button>
              <button
                type="button"
                onClick={() => {
                  callUploadModal("excel");
                }}
                className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-md leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
              >
                Upload File <FontAwesomeIcon icon={faArrowUp} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainDashboardPannel;
