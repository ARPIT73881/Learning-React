import React, { useEffect, useRef, useState } from "react";
import Input from "./Input";
import Select from "./Select";

export default function ExpenseForm({ setExpenses }) {
  const [expense, setExpense] = useState({
    title: "",
    category: "",
    amount: "",
  });

  const [errors, setErrors] = useState({});

  const validationConfig = {
    title: [
      { required: true, message: "Title is required" },
      { minLength: 3, message: "Title should be at least 3 characters long" },
    ],
    category: [{ required: true, message: "Please select a Category" }],
    amount: [{ required: true, message: "Amount is required" }],
  };

  const validate = (formData) => {
    const errorsData = {};

    Object.entries(formData).forEach(([key, value]) => {
      validationConfig[key].some((rule) => {
        if (rule.minLength && value.length < 3) {
          errorsData[key] = rule.message;
          return true;
        }
        if (rule.required && !value) {
          errorsData[key] = rule.message;
          return true;
        }
      });
    });

    setErrors(errorsData);
    return errorsData;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validateResult = validate(expense);

    if (Object.keys(validateResult).length) return;

    setExpenses((prevState) => [
      ...prevState,
      { ...expense, id: crypto.randomUUID() },
    ]);
    setExpense({
      title: "",
      category: "",
      amount: "",
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setExpense((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    setErrors({});
  };

  return (
    <form className="expense-form" onSubmit={handleSubmit}>
      <Input
        label="Title"
        id="title"
        name="title"
        value={expense.title}
        onChange={handleChange}
        error={errors.title}
      />

      <Select
        label="Category"
        id="category"
        name="category"
        value={expense.category}
        onChange={handleChange}
        defaultOption="Select Category"
        options={["Grocery", "Clothes", "Bills", "Education", "Medicine"]}
        error={errors.category}
      />

      <Input
        label="Amount"
        id="amount"
        name="amount"
        value={expense.amount}
        onChange={handleChange}
        error={errors.amount}
      />

      <button className="add-btn">Add</button>
    </form>
  );
}
