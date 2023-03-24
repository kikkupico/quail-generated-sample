import React from "react";
import { Form, Input, Button } from "antd";
import GridLayout from "react-grid-layout";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import "./styles.css";

const { Item } = Form;

const layout = [
  { i: "cat", x: 0, y: 0, w: 6, h: 12 },
  { i: "form", x: 6, y: 3, w: 6, h: 12 }
];

const LandingPage = () => {
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  return (
    <GridLayout
      className="layout"
      layout={layout}
      cols={12}
      rowHeight={30}
      width={1200}
    >
      <div key="cat">
        <img
          src="https://placekitten.com/1200/1200"
          alt="Cute cat"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>
      <div key="form">
        <Form onFinish={onFinish}>
          <Item
            label="Name"
            name="name"
            rules={[{ required: true, message: "Please enter your name!" }]}
          >
            <Input />
          </Item>
          <Item
            label="Email"
            name="email"
            rules={[
              { required: true, message: "Please enter your email!" },
              { type: "email", message: "Please enter a valid email!" }
            ]}
          >
            <Input />
          </Item>
          <Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Item>
        </Form>
      </div>
      <h1 key="1" data-grid={{ x: 6, y: 0, w: 3, h: 2 }}>
        My Cat Guesbook
      </h1>
    </GridLayout>
  );
};

export default LandingPage;
