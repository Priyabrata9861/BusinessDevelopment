import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Badge, Button, Col, Form, Row } from "react-bootstrap";
import { HiOutlineDownload, HiOutlineFilter, HiOutlineUserAdd, HiOutlineSearch, HiOutlineRefresh } from "react-icons/hi";
import Select from "react-select";
import { useForm } from "react-hook-form";

function UserFilter(props) {
    const { grievanceList, setshowAddGrievanceModal, showAddGrievanceModal, handleOrganizationId,totalRows, handleProjectId,
        handleMenuChange, handleStatusChange, handleStartDateChange, handleEndDateChange } = props
      const [showFilterSection, setShowFilterSection] = useState(false);
      const [organizationDD, setOrganizatonDD] = useState([]);
      const [orgId, setOrgId] = useState("");
      const [projectDD, setProjectDD] = useState([]);
      const [projectId, setProjectId] = useState("");
      const [menuDD, setMenuDD] = useState([]);
      const [menuId, setMenuId] = useState("");
      const [status, setstatus] = useState('');
      const { register, handleSubmit, reset, setValue, watch, control, formState: { errors } } = useForm();

      const handleStatusChanged = (selectedOption) => {
        setstatus(selectedOption)
        handleStatusChange(selectedOption.value)
      }
    
      const handleReset = () => {
        handleOrganizationId([]);
        setOrgId("");
        handleStatusChange("");
        handleMenuChange("");
        setstatus("");
        setMenuId("");
        setProjectId("");
        handleProjectId([]);
        setValue("startDate", "");
        setValue("endDate", "");
        handleSearch();
      }
    
      const handleFilterClick = () => {
        setShowFilterSection(!showFilterSection);
      };

    

      const handleSearch = () => {
        const startDate = watch('startDate');
        const endDate = watch('endDate');
        handleStartDateChange(startDate);
        handleEndDateChange(endDate);
        grievanceList();
      };

    
    
      const optionsForStatus = [
        { value: "", label: "Status", isDisabled: true },
        { value: true, label: "Active" },
        { value: false, label: "Inactive" },
      ];
  return (
    <div>
    <div className="d-lg-flex  align-items-center  head-title">
      <div className="d-lg-flex  align-items-center my-4 pe-2 justify-content-start">
        <h5 className=" ">User Management </h5>
      </div>

      <div className="d-lg-flex  filter justify-content-end  gap-2">
        <Button variant="primary custom-filter" type="submit" className="custom-btn" >
          <HiOutlineUserAdd />
        </Button>
        <div className="vr" />
        <Button
          variant="primary custom-filter"
          type="submit"
          onClick={handleFilterClick}
          className="custom-btn"
        >
          <HiOutlineFilter />
        </Button>
        <div className="vr" />
        <Button
          variant="primary custom-filter"
          type="submit"
          onClick={handleFilterClick}
          className="custom-btn"
        >
          <HiOutlineDownload />
        </Button>
        {/* </div> */}
      </div>
    </div>

    <div className={`visible-section ${showFilterSection ? "show" : ""}`}>
      <div className="bg-white px-3 py-3 rounded-top-4">
        <Row className="pb-4 align-items-end">
          <Col>
            <Form.Label htmlFor="disabledTextInput" className="font-size-label  ">
              Select Organization
            </Form.Label>
            <Select
              id="organizationSelect"
              menuPortalTarget={document.body}
              menuPosition={"fixed"}
              //styles={CustomSelectStyles()}
             
              clearButton
            />

          </Col>
          <Col>
            <Form.Label htmlFor="disabledTextInput" className="font-size-label  ">
              Select Project
            </Form.Label>
            <Select
              id="projectSelect"
              menuPortalTarget={document.body}
              menuPosition={"fixed"}
             // styles={CustomSelectStyles()}
              clearButton
            />

          </Col>
          <Col>
            <Form.Label htmlFor="disabledTextInput" className="font-size-label ">
              Select Menu
            </Form.Label>
            <Select
              id="existSelect"
              placeholder="Select exist"
              menuPortalTarget={document.body}
              menuPosition={"fixed"}
              //styles={CustomSelectStyles()}
              clearButton
            />
          </Col>
          <Col>
            <Form.Label htmlFor="disabledTextInput" className="font-size-label ">
              Select Start Date
            </Form.Label>
            <Form.Control
              style={{ border: '1px solid #6f42c1', borderRadius: '4px' }}
              type="date"
              size="sm"
              className="form-control-add-user"
              name="startDate"
              {...register("startDate", {
                required: "Start date is required",
              })}
            />
          </Col>
          <Col>
            <Form.Label htmlFor="disabledTextInput" className="font-size-label ">
              Select End Date
            </Form.Label>
            <Form.Control
              type="date"
              size="sm"
              style={{ border: '1px solid #6f42c1', borderRadius: '4px' }}
              className="form-control-add-user"
              name="endDate"
              {...register("endDate", {
                required: "End date is required",
                validate: (value) => {
                  const startDate = watch('startDate');
                  return new Date(value) >= new Date(startDate) || "End date must be equal to or greater than start date";
                }
              })}
            />
          </Col>
          <Col>
            <Form.Label htmlFor="disabledTextInput" className="font-size-label ">
              Select Status
            </Form.Label>
            <Select
              id="statusSelect"
              placeholder="Select status"
              options={optionsForStatus}
              value={status}
              onChange={handleStatusChanged}
              menuPortalTarget={document.body}
              menuPosition={"fixed"}
             // styles={CustomSelectStyles()}
              clearButton
            />
          </Col>
          <Col>
            <div className="d-lg-flex filter flex-column justify-content-end  ">
              <div className="action-frame d-lg-flex  gap-2 ">
                <Button
                  className="w-50 btn-height custom-btn"
                  variant="primary custom-filter"
                  type="submit"
                  onClick={handleSearch}
                >
                  <HiOutlineSearch />
                </Button>
                <div className="vr" />
                <Button
                  variant="primary custom-filter"
                  type="submit"
                  className="custom-btn w-50"
                  onClick={handleReset}
                >
                  <HiOutlineRefresh />
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>

  </div>
  )
}

export default UserFilter
