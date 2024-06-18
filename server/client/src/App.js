import React, { useEffect, useState } from "react";
import "./App.css";
import { Container, Row, Col } from "react-bootstrap";
import { BiChevronsDown, BiLinkExternal } from "react-icons/bi";
import { ImLinkedin } from "react-icons/im";
import { AiOutlineGithub } from "react-icons/ai";
import { GrLocation } from "react-icons/gr";
import { SiGmail } from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import { SiRedux } from "react-icons/si";
import Card from "react-bootstrap/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3,
  faJs,
  faReact,
  faNode
} from "@fortawesome/free-brands-svg-icons";
import { SiBootstrap } from "react-icons/si";
import MapComponent from "./Mapcomponent";
import axios from "axios";
import AOS from "aos";
import "aos/dist/aos.css";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  console.log(formData);

  useEffect(() => {
    AOS.init({
      duration: 1200
    });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      axios
        .post("https://portfolio-saran.koyeb.app/send-email", formData)
        .then((response) => {
          setFormData({
            name: "",
            email: "",
            subject: "",
            message: ""
          });
          console.log(">>>", formData);
          document.getElementById("name").value = "";
          document.getElementById("email").value = "";
          document.getElementById("subject").value = "";
          document.getElementById("message").value = "";
          // window.location.reload();
        })
        .then(() => {
          toast.success("Email sent successfully", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "dark"
          });
        })
        .catch((error) => {
          toast.error("Failed to send email. Please try again.", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "dark"
          });
        });
    }
  };

  const validateForm = () => {
    const { name, email, subject, message } = formData;

    if (!name.trim()) {
      toast.error("Name is required");
      return false;
    }

    if (!email.trim()) {
      toast.error("Email is required");
      return false;
    }

    if (!subject.trim()) {
      toast.error("Subject is required");
      return false;
    }

    if (!message.trim()) {
      toast.error("Message is required");
      return false;
    }

    return true;
  };

  return (
    <div className="App ">
      <Container fluid>
        {/* WELCOME */}
        <Row>
          <div className=" my-5">
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 710 118"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="svg1"
            >
              <g id="Welcome">
                <mask
                  id="path-1-outside-1"
                  maskUnits="userSpaceOnUse"
                  x="0.327881"
                  y="0.1521"
                  width="710"
                  height="118"
                  fill="black"
                >
                  <rect
                    fill="white"
                    x="0.327881"
                    y="0.1521"
                    width="710"
                    height="118"
                  />
                  <path d="M156.8 11.2001L122.816 112H111.584L82.0639 26.0321L52.3999 112H41.3119L7.32788 11.2001H18.2719L47.3599 97.8881L77.4559 11.2001H87.3919L117.056 98.3201L146.576 11.2001H156.8Z" />
                  <path d="M237.964 77.2961H174.604C175.18 85.1681 178.204 91.5521 183.676 96.4481C189.148 101.248 196.06 103.648 204.412 103.648C209.116 103.648 213.436 102.832 217.372 101.2C221.308 99.4721 224.716 96.9761 227.596 93.7121L233.356 100.336C229.996 104.368 225.772 107.44 220.684 109.552C215.692 111.664 210.172 112.72 204.124 112.72C196.348 112.72 189.436 111.088 183.388 107.824C177.436 104.464 172.78 99.8561 169.42 94.0001C166.06 88.1441 164.38 81.5201 164.38 74.1281C164.38 66.7361 165.964 60.1121 169.132 54.2561C172.396 48.4001 176.812 43.8401 182.38 40.5761C188.044 37.3121 194.38 35.6801 201.388 35.6801C208.396 35.6801 214.684 37.3121 220.252 40.5761C225.82 43.8401 230.188 48.4001 233.356 54.2561C236.524 60.0161 238.108 66.6401 238.108 74.1281L237.964 77.2961ZM201.388 44.4641C194.092 44.4641 187.948 46.8161 182.956 51.5201C178.06 56.1281 175.276 62.1761 174.604 69.6641H228.316C227.644 62.1761 224.812 56.1281 219.82 51.5201C214.924 46.8161 208.78 44.4641 201.388 44.4641Z" />
                  <path d="M262.518 5.1521H272.742V112H262.518V5.1521Z" />
                  <path d="M336.182 112.72C328.694 112.72 321.974 111.088 316.022 107.824C310.166 104.56 305.558 100 302.198 94.1441C298.838 88.1921 297.158 81.5201 297.158 74.1281C297.158 66.7361 298.838 60.1121 302.198 54.2561C305.558 48.4001 310.166 43.8401 316.022 40.5761C321.974 37.3121 328.694 35.6801 336.182 35.6801C342.71 35.6801 348.518 36.9761 353.606 39.5681C358.79 42.0641 362.87 45.7601 365.846 50.6561L358.214 55.8401C355.718 52.0961 352.55 49.3121 348.71 47.4881C344.87 45.5681 340.694 44.6081 336.182 44.6081C330.71 44.6081 325.766 45.8561 321.35 48.3521C317.03 50.7521 313.622 54.2081 311.126 58.7201C308.726 63.2321 307.526 68.3681 307.526 74.1281C307.526 79.9841 308.726 85.1681 311.126 89.6801C313.622 94.0961 317.03 97.5521 321.35 100.048C325.766 102.448 330.71 103.648 336.182 103.648C340.694 103.648 344.87 102.736 348.71 100.912C352.55 99.0881 355.718 96.3041 358.214 92.5601L365.846 97.7441C362.87 102.64 358.79 106.384 353.606 108.976C348.422 111.472 342.614 112.72 336.182 112.72Z" />
                  <path d="M419.225 112.72C411.929 112.72 405.353 111.088 399.497 107.824C393.641 104.464 389.033 99.8561 385.673 94.0001C382.313 88.1441 380.633 81.5201 380.633 74.1281C380.633 66.7361 382.313 60.1121 385.673 54.2561C389.033 48.4001 393.641 43.8401 399.497 40.5761C405.353 37.3121 411.929 35.6801 419.225 35.6801C426.521 35.6801 433.097 37.3121 438.953 40.5761C444.809 43.8401 449.369 48.4001 452.633 54.2561C455.993 60.1121 457.673 66.7361 457.673 74.1281C457.673 81.5201 455.993 88.1441 452.633 94.0001C449.369 99.8561 444.809 104.464 438.953 107.824C433.097 111.088 426.521 112.72 419.225 112.72ZM419.225 103.648C424.601 103.648 429.401 102.448 433.625 100.048C437.945 97.5521 441.305 94.0481 443.705 89.5361C446.105 85.0241 447.305 79.8881 447.305 74.1281C447.305 68.3681 446.105 63.2321 443.705 58.7201C441.305 54.2081 437.945 50.7521 433.625 48.3521C429.401 45.8561 424.601 44.6081 419.225 44.6081C413.849 44.6081 409.001 45.8561 404.681 48.3521C400.457 50.7521 397.097 54.2081 394.601 58.7201C392.201 63.2321 391.001 68.3681 391.001 74.1281C391.001 79.8881 392.201 85.0241 394.601 89.5361C397.097 94.0481 400.457 97.5521 404.681 100.048C409.001 102.448 413.849 103.648 419.225 103.648Z" />
                  <path d="M576.611 35.6801C586.115 35.6801 593.554 38.4161 598.93 43.8881C604.402 49.3601 607.138 57.4241 607.138 68.0801V112H596.914V69.0881C596.914 61.2161 594.995 55.2161 591.155 51.0881C587.411 46.9601 582.083 44.8961 575.171 44.8961C567.299 44.8961 561.106 47.3441 556.594 52.2401C552.082 57.0401 549.826 63.7121 549.826 72.2561V112H539.602V69.0881C539.602 61.2161 537.683 55.2161 533.843 51.0881C530.099 46.9601 524.722 44.8961 517.714 44.8961C509.938 44.8961 503.746 47.3441 499.138 52.2401C494.626 57.0401 492.371 63.7121 492.371 72.2561V112H482.147V36.2561H491.939V50.0801C494.627 45.4721 498.371 41.9201 503.171 39.4241C507.971 36.9281 513.491 35.6801 519.731 35.6801C526.067 35.6801 531.538 37.0241 536.146 39.7121C540.85 42.4001 544.355 46.3841 546.659 51.6641C549.443 46.6721 553.427 42.7841 558.611 40.0001C563.891 37.1201 569.891 35.6801 576.611 35.6801Z" />
                  <path d="M704.698 77.2961H641.339C641.915 85.1681 644.938 91.5521 650.41 96.4481C655.882 101.248 662.794 103.648 671.146 103.648C675.85 103.648 680.171 102.832 684.107 101.2C688.043 99.4721 691.451 96.9761 694.331 93.7121L700.09 100.336C696.73 104.368 692.506 107.44 687.418 109.552C682.426 111.664 676.906 112.72 670.858 112.72C663.082 112.72 656.17 111.088 650.122 107.824C644.17 104.464 639.514 99.8561 636.154 94.0001C632.794 88.1441 631.115 81.5201 631.115 74.1281C631.115 66.7361 632.698 60.1121 635.866 54.2561C639.13 48.4001 643.547 43.8401 649.115 40.5761C654.779 37.3121 661.114 35.6801 668.122 35.6801C675.13 35.6801 681.418 37.3121 686.986 40.5761C692.554 43.8401 696.922 48.4001 700.09 54.2561C703.258 60.0161 704.842 66.6401 704.842 74.1281L704.698 77.2961ZM668.122 44.4641C660.826 44.4641 654.682 46.8161 649.69 51.5201C644.794 56.1281 642.011 62.1761 641.339 69.6641H695.05C694.378 62.1761 691.547 56.1281 686.555 51.5201C681.659 46.8161 675.514 44.4641 668.122 44.4641Z" />
                </mask>
                <path
                  class="letter"
                  d="M156.8 11.2001L122.816 112H111.584L82.0639 26.0321L52.3999 112H41.3119L7.32788 11.2001H18.2719L47.3599 97.8881L77.4559 11.2001H87.3919L117.056 98.3201L146.576 11.2001H156.8Z"
                  stroke="aqua"
                  stroke-width="10"
                  mask="url(#path-1-outside-1)"
                />
                <path
                  class="letter"
                  d="M237.964 77.2961H174.604C175.18 85.1681 178.204 91.5521 183.676 96.4481C189.148 101.248 196.06 103.648 204.412 103.648C209.116 103.648 213.436 102.832 217.372 101.2C221.308 99.4721 224.716 96.9761 227.596 93.7121L233.356 100.336C229.996 104.368 225.772 107.44 220.684 109.552C215.692 111.664 210.172 112.72 204.124 112.72C196.348 112.72 189.436 111.088 183.388 107.824C177.436 104.464 172.78 99.8561 169.42 94.0001C166.06 88.1441 164.38 81.5201 164.38 74.1281C164.38 66.7361 165.964 60.1121 169.132 54.2561C172.396 48.4001 176.812 43.8401 182.38 40.5761C188.044 37.3121 194.38 35.6801 201.388 35.6801C208.396 35.6801 214.684 37.3121 220.252 40.5761C225.82 43.8401 230.188 48.4001 233.356 54.2561C236.524 60.0161 238.108 66.6401 238.108 74.1281L237.964 77.2961ZM201.388 44.4641C194.092 44.4641 187.948 46.8161 182.956 51.5201C178.06 56.1281 175.276 62.1761 174.604 69.6641H228.316C227.644 62.1761 224.812 56.1281 219.82 51.5201C214.924 46.8161 208.78 44.4641 201.388 44.4641Z"
                  stroke="white"
                  stroke-width="10"
                  mask="url(#path-1-outside-1)"
                />
                <path
                  class="letter"
                  d="M262.518 5.1521H272.742V112H262.518V5.1521Z"
                  stroke="white"
                  stroke-width="10"
                  mask="url(#path-1-outside-1)"
                />
                <path
                  class="letter"
                  d="M336.182 112.72C328.694 112.72 321.974 111.088 316.022 107.824C310.166 104.56 305.558 100 302.198 94.1441C298.838 88.1921 297.158 81.5201 297.158 74.1281C297.158 66.7361 298.838 60.1121 302.198 54.2561C305.558 48.4001 310.166 43.8401 316.022 40.5761C321.974 37.3121 328.694 35.6801 336.182 35.6801C342.71 35.6801 348.518 36.9761 353.606 39.5681C358.79 42.0641 362.87 45.7601 365.846 50.6561L358.214 55.8401C355.718 52.0961 352.55 49.3121 348.71 47.4881C344.87 45.5681 340.694 44.6081 336.182 44.6081C330.71 44.6081 325.766 45.8561 321.35 48.3521C317.03 50.7521 313.622 54.2081 311.126 58.7201C308.726 63.2321 307.526 68.3681 307.526 74.1281C307.526 79.9841 308.726 85.1681 311.126 89.6801C313.622 94.0961 317.03 97.5521 321.35 100.048C325.766 102.448 330.71 103.648 336.182 103.648C340.694 103.648 344.87 102.736 348.71 100.912C352.55 99.0881 355.718 96.3041 358.214 92.5601L365.846 97.7441C362.87 102.64 358.79 106.384 353.606 108.976C348.422 111.472 342.614 112.72 336.182 112.72Z"
                  stroke="white"
                  stroke-width="10"
                  mask="url(#path-1-outside-1)"
                />
                <path
                  class="letter"
                  d="M419.225 112.72C411.929 112.72 405.353 111.088 399.497 107.824C393.641 104.464 389.033 99.8561 385.673 94.0001C382.313 88.1441 380.633 81.5201 380.633 74.1281C380.633 66.7361 382.313 60.1121 385.673 54.2561C389.033 48.4001 393.641 43.8401 399.497 40.5761C405.353 37.3121 411.929 35.6801 419.225 35.6801C426.521 35.6801 433.097 37.3121 438.953 40.5761C444.809 43.8401 449.369 48.4001 452.633 54.2561C455.993 60.1121 457.673 66.7361 457.673 74.1281C457.673 81.5201 455.993 88.1441 452.633 94.0001C449.369 99.8561 444.809 104.464 438.953 107.824C433.097 111.088 426.521 112.72 419.225 112.72ZM419.225 103.648C424.601 103.648 429.401 102.448 433.625 100.048C437.945 97.5521 441.305 94.0481 443.705 89.5361C446.105 85.0241 447.305 79.8881 447.305 74.1281C447.305 68.3681 446.105 63.2321 443.705 58.7201C441.305 54.2081 437.945 50.7521 433.625 48.3521C429.401 45.8561 424.601 44.6081 419.225 44.6081C413.849 44.6081 409.001 45.8561 404.681 48.3521C400.457 50.7521 397.097 54.2081 394.601 58.7201C392.201 63.2321 391.001 68.3681 391.001 74.1281C391.001 79.8881 392.201 85.0241 394.601 89.5361C397.097 94.0481 400.457 97.5521 404.681 100.048C409.001 102.448 413.849 103.648 419.225 103.648Z"
                  stroke="white"
                  stroke-width="10"
                  mask="url(#path-1-outside-1)"
                />
                <path
                  class="letter"
                  d="M576.611 35.6801C586.115 35.6801 593.554 38.4161 598.93 43.8881C604.402 49.3601 607.138 57.4241 607.138 68.0801V112H596.914V69.0881C596.914 61.2161 594.995 55.2161 591.155 51.0881C587.411 46.9601 582.083 44.8961 575.171 44.8961C567.299 44.8961 561.106 47.3441 556.594 52.2401C552.082 57.0401 549.826 63.7121 549.826 72.2561V112H539.602V69.0881C539.602 61.2161 537.683 55.2161 533.843 51.0881C530.099 46.9601 524.722 44.8961 517.714 44.8961C509.938 44.8961 503.746 47.3441 499.138 52.2401C494.626 57.0401 492.371 63.7121 492.371 72.2561V112H482.147V36.2561H491.939V50.0801C494.627 45.4721 498.371 41.9201 503.171 39.4241C507.971 36.9281 513.491 35.6801 519.731 35.6801C526.067 35.6801 531.538 37.0241 536.146 39.7121C540.85 42.4001 544.355 46.3841 546.659 51.6641C549.443 46.6721 553.427 42.7841 558.611 40.0001C563.891 37.1201 569.891 35.6801 576.611 35.6801Z"
                  stroke="white"
                  stroke-width="10"
                  mask="url(#path-1-outside-1)"
                />
                <path
                  class="letter"
                  d="M704.698 77.2961H641.339C641.915 85.1681 644.938 91.5521 650.41 96.4481C655.882 101.248 662.794 103.648 671.146 103.648C675.85 103.648 680.171 102.832 684.107 101.2C688.043 99.4721 691.451 96.9761 694.331 93.7121L700.09 100.336C696.73 104.368 692.506 107.44 687.418 109.552C682.426 111.664 676.906 112.72 670.858 112.72C663.082 112.72 656.17 111.088 650.122 107.824C644.17 104.464 639.514 99.8561 636.154 94.0001C632.794 88.1441 631.115 81.5201 631.115 74.1281C631.115 66.7361 632.698 60.1121 635.866 54.2561C639.13 48.4001 643.547 43.8401 649.115 40.5761C654.779 37.3121 661.114 35.6801 668.122 35.6801C675.13 35.6801 681.418 37.3121 686.986 40.5761C692.554 43.8401 696.922 48.4001 700.09 54.2561C703.258 60.0161 704.842 66.6401 704.842 74.1281L704.698 77.2961ZM668.122 44.4641C660.826 44.4641 654.682 46.8161 649.69 51.5201C644.794 56.1281 642.011 62.1761 641.339 69.6641H695.05C694.378 62.1761 691.547 56.1281 686.555 51.5201C681.659 46.8161 675.514 44.4641 668.122 44.4641Z"
                  stroke="white"
                  stroke-width="10"
                  mask="url(#path-1-outside-1)"
                />
              </g>
            </svg>
          </div>
        </Row>

        {/* Name Content */}
        <Row className="">
          <Col xs={12} md={6}>
            <div className="mt-5 mb-3">
              <h1 className="color-white">
                <span className="hover-effect">H</span>
                <span className="hover-effect">i</span>
                <span className="hover-effect">,</span>
              </h1>
              <h1 className="color-white">
                <span className="hover-effect">I</span>
                <span className="hover-effect">'</span>
                <span className="hover-effect">m</span>
                <span className="hover-effect ms-3">S</span>
                <span className="hover-effect">a</span>
                <span className="hover-effect">r</span>
                <span className="hover-effect">a</span>
                <span className="hover-effect">n</span>
                <span className="hover-effect">,</span>
              </h1>

              <h2 className=" color_gray color_gray1 mt-2">
                <strong>Full Stack Web Developer</strong>
              </h2>
              <div className=" mt-5">
                <a
                  href="../SARAN KUMAR.pdf"
                  className="btn41-43 btn-41 text-decoration-none rounded"
                >
                  Resume
                </a>
              </div>
            </div>
          </Col>
          <Col xs={12} md={6} className=" mt-sm-5">
            <div className="centered_container">
              <div className="dream_quote">
                <span className="d-flex">
                  <p className="dreams">if</p>
                  <p className="bracket">(</p>
                  <p className="setSize">goal.</p>
                  <p className="dreams">isDifficult</p>
                  <p className="bracket">()</p>
                  <p className="bracket">)</p>
                  <p className="bracket">{"{"}</p>
                </span>
                <span className="d-flex">
                  <p className="setSize">console.log</p>
                  <p className="bracket">(</p>
                  <p className="dreams">"It's Okay, don't give up!"</p>
                  <p className="bracket">)</p>
                  <p className="bracket">;</p>
                </span>
                <span className="d-flex">
                  <p className="dreams">goal.</p>
                  <p className="setSize">nextStep</p>
                  <p className="bracket">()</p>
                  <p className="bracket">;</p>
                </span>
                <p className="bracket">{"}"}</p>
              </div>
            </div>
          </Col>
        </Row>
        {/* Side Scroll */}
        <Row data-aos="fade-up">
          <span className=" d-flex justify-content-between align-items-center">
            <p className="fontwhite moving-text vertical-text mt-5">
              <span className="d-flex justify-content-center align-items-center scroll">
                <b>Scroll down </b>
                <BiChevronsDown className=" me-1" />
              </span>
            </p>{" "}
            <p className="fontwhite moving-text vertical-text mt-5">
              <span className="d-flex justify-content-center align-items-center scroll">
                <b>Scroll down </b>
                <BiChevronsDown className=" me-1" />
              </span>
            </p>
          </span>
        </Row>
        {/* Projects */}
        <Row data-aos="fade-up">
          <Col xs={12} md={6}>
            <div className="fontwhite px-3">
              <h1 className="headings">Projects</h1>
              <p className="p-3 project-font">
                <strong>
                  Below are some of my recent projects where I've honed my
                  skills in modern web development technologies, particularly
                  focusing on the MERN stack (MongoDB, Express.js, React.js,
                  Node.js). Through these projects, I've gained hands-on
                  experience in building scalable and efficient web
                  applications.
                </strong>
              </p>
            </div>
          </Col>
        </Row>
        {/* Card_Caontainer */}
        <Row data-aos="fade-up">
          <Col xs={12} md={4} className=" pt-3 d-flex justify-content-center ">
            <a
              href="https://cloths-saran.koyeb.app/"
              className=" text-decoration-none"
            >
              {" "}
              <Card
                style={{ width: "18rem" }}
                className=" card-container hover-effect2"
              >
                <div className=" d-flex justify-content-end p-2 fs-4">
                  <BiLinkExternal className=" text-white" />
                </div>{" "}
                <Card.Body>
                  <Card.Title className="card-title">Cloths Store</Card.Title>
                  <Card.Text className="fontwhite">
                    Designer | Shoe store with a React frontend using Bootstrap
                    and React Bootstrap, selling clothing online. Features
                    animation, mobile responsiveness, and Router-Dom for page
                    navigation.
                  </Card.Text>
                </Card.Body>
                <div className="skills d-flex justify-content-evenly pb-2">
                  <small className="0">React.js</small>
                  <small className="0">Redux</small>
                  <small className="1">JWT Token</small>
                  <small className="3">Admin Panel</small>
                </div>
              </Card>
            </a>
          </Col>
          <Col xs={12} md={4} className=" pt-3 d-flex justify-content-center ">
            <a
              href="https://github.com/saran-softdev/Coffee-Shop.git"
              className=" text-decoration-none"
            >
              <Card
                style={{ width: "18rem" }}
                className=" card-container hover-effect2 "
              >
                <div className=" d-flex justify-content-end p-2 fs-4">
                  <BiLinkExternal className=" text-white" />
                </div>{" "}
                <Card.Body>
                  <Card.Title className="card-title">Coffee Shop</Card.Title>
                  <Card.Text className="fontwhite">
                    Coffee shop selling coffee powder with a React frontend
                    using Bootstrap. Features user authentication via Google
                    Sign-In, CRUD operations, and admin panel integration.
                  </Card.Text>
                </Card.Body>
                <div className="skills d-flex justify-content-evenly pb-2">
                  <small className="0">React.js</small>
                  <small className="1">Bootstrap</small>
                  <small className="2">Express.js</small>
                  <small className="3">Node.js</small>
                </div>
              </Card>
            </a>
          </Col>
          <Col xs={12} md={4} className=" pt-3 d-flex justify-content-center ">
            <a
              href="https://github.com/saran-softdev/MEAT-EAT.git"
              className=" text-decoration-none"
            >
              {" "}
              <Card
                style={{ width: "18rem" }}
                className=" card-container hover-effect2"
              >
                <div className=" d-flex justify-content-end p-2 fs-4">
                  <BiLinkExternal className=" text-white" />
                </div>{" "}
                <Card.Body>
                  <Card.Title className="card-title">Meat&Eat</Card.Title>
                  <Card.Text className="fontwhite">
                    Meat and Eat React frontend with Bootstrap, React Bootstrap.
                    Features include animations and seamless cart management
                    integrated with Redux for a dynamic user experience.
                  </Card.Text>
                </Card.Body>
                <div className="skills d-flex justify-content-evenly pb-2">
                  <small className="0">React.js</small>
                  <small className="1">Bootstrap</small>
                  <small className="2">Responsive</small>
                  <small className="3">Router-Dom</small>
                </div>
              </Card>
            </a>
          </Col>
        </Row>
        {/* About me */}
        <Row className=" mt-3" data-aos="fade-up">
          <Col xs={12} md={6} className=" my-5">
            <h1 className="headings">About me</h1>
            <p className="skills about_content pt-3">
              To secure a challenging position as a MERN stack web developer,
              leveraging my skills in MongoDB, Express.js, React, and Node.js to
              contribute to the development of innovative and scalable web
              applications. With a strong foundation in full-stack development
              and a passion for staying updated with the latest technologies, my
              goal is to work collaboratively in a dynamic team environment. I
              aim to contribute my expertise in designing and implementing
              robust, efficient, and user-friendly solutions, while continuously
              learning and growing as a MERN stack developer. Through creative
              problem-solving and a commitment to delivering high-quality code,
              I aspire to contribute to the success of projects and enhance my
              proficiency in building modern web applications.
            </p>
            <div className=" d-flex social_links gap-3">
              <a href="https://www.linkedin.com/in/saran-softdev">
                <span>
                  <ImLinkedin className="fontwhite fs-3 " />
                </span>
              </a>
              <a href="https://github.com/saran-softdev">
                <span>
                  <AiOutlineGithub className="fontwhite fs-3 " />
                </span>
              </a>
              <a href="mailto:saran.softdev@gmail.com">
                <span>
                  <SiGmail className="fontwhite fs-3 " />
                </span>
              </a>
              <span></span>
            </div>
          </Col>
          <Col xs={12} md={6}>
            <span>
              <h1 className="headings skills_content py-5 ">Skills</h1>
            </span>
            <span className="skills_cards">
              <div className="container1">
                <div className="skills1">
                  <div className="each html">
                    <div className="box">
                      <div className="content">
                        <h2>
                          <strong>HTML | CSS</strong>
                        </h2>
                        <FontAwesomeIcon icon={faHtml5} className=" fs-1 m-2" />
                        <FontAwesomeIcon icon={faCss3} className=" fs-1 m-2" />
                      </div>
                    </div>
                  </div>
                  <div className="each css">
                    <div className="box">
                      <div className="content">
                        <h2>
                          <strong>JAVASCRIPT | BOOTSTRAP</strong>
                        </h2>
                        <span className=" d-flex justify-content-center align-items-center ms-5">
                          <FontAwesomeIcon icon={faJs} className=" fs-1 m-2" />
                          <SiBootstrap className=" fs-1 m-2" />
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="center">
                    <div className="box mern_stack">
                      <h2 className=" ms-3 ">
                        <strong>MERN STACK</strong>
                      </h2>
                    </div>
                  </div>
                  <div className="each js">
                    <div className="box">
                      <div className="content">
                        <span className=" d-flex justify-content-center ">
                          <FontAwesomeIcon
                            icon={faReact}
                            className=" fs-1 m-2"
                          />
                          <SiRedux className=" fs-1 m-2" />
                        </span>

                        <h2 className=" pb-3">
                          <strong>REACT | REDUX</strong>
                        </h2>
                      </div>
                    </div>
                  </div>
                  <div className="each ng">
                    <div className="box">
                      <div className="content content_nem">
                        <div className=" d-flex justify-content-center align-items-center sm_icons_nm">
                          <FontAwesomeIcon
                            icon={faNode}
                            className=" fs-1 ms-1 "
                          />
                          <DiMongodb className=" fs-1 ms-1" />
                        </div>

                        <h2>
                          <strong>NODE | EXPRESS | MONGO DB</strong>
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </span>
          </Col>
        </Row>
        {/* Contact  */}
        <Row data-aos="fade-up">
          <Col xs={12} md={6}>
            <span className="contact_body d-flex flex-column">
              <h1 className="headings" id="contact-id">
                Contact me
              </h1>
              <span>
                <div className="login-box mt-3">
                  <form onSubmit={handleSubmit}>
                    <div className="user-box">
                      <input
                        type="text"
                        name="name"
                        id="name"
                        autoComplete="off"
                        onChange={handleChange}
                        className="bg-transparent"
                        required
                      />
                      <label>Name</label>
                    </div>
                    <div className="user-box">
                      <input
                        type="text"
                        name="email"
                        autoComplete="off"
                        onChange={handleChange}
                        id="email"
                        className="bg-transparent"
                        required
                      />
                      <label>Email</label>
                    </div>
                    <div className="user-box">
                      <input
                        type="text"
                        name="subject"
                        autoComplete="off"
                        onChange={handleChange}
                        id="subject"
                        className="bg-transparent"
                        required
                      />
                      <label>Subject</label>
                    </div>
                    <div className="user-box">
                      <textarea
                        rows="4"
                        cols="35"
                        className="bg-transparent text-white"
                        placeholder="Message"
                        name="message"
                        autoComplete="off"
                        id="message"
                        onChange={handleChange}
                        required
                      ></textarea>
                    </div>
                    <button type="submit" className=" button  rounded-1 mt-3 ">
                      Send
                    </button>
                  </form>
                </div>
              </span>
            </span>
          </Col>
          <Col
            xs={12}
            md={6}
            className=" d-flex justify-content-center align-items-center flex-column"
          >
            <div className=" d-flex justify-content-center align-items-center">
              <GrLocation className=" text-danger fs-1 mb-3 me-2" />
              <p className="color_gray location_content">
                <strong>Panruti, Cuddalore Dist, Tamil Nadu.</strong>
              </p>
            </div>
            <p className="skills">
              <strong>I am relocating anywhere for the job.</strong>
            </p>
            <MapComponent />
          </Col>
        </Row>
      </Container>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
}

export default App;
