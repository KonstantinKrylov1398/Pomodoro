import React, { useEffect, useState } from "react";
import classNames from "classnames/bind";

const COLUMNS = [
  {
    name: "id",
    label: "#",
  },
  {
    name: "test",
    label: "Ответственный",
  },
  {
    name: "table",
    label: "Стол",
  },
  {
    name: "status",
    label: "Статус",
  },
  {
    name: "time",
    label: "Создан",
  },
];
const ROWS = [
  {
    id: 1,
    test: "Иванов Иван Иванович",
    table: "Стол №1",
  },
  {
    id: 2,
    test: "Петров Петр Петрович",
    table: "Стол №2",
  },
  {
    id: 3,
    test: "Павлов Павел Павлович",
    table: "Стол №3",
    status: "Стол №3",
  },
  {
    id: 4,
    test: "Сидоров Сидр Сидорович",
    table: "Стол №4",
  },
];

export const TableTask = ({ columns = COLUMNS, rows = ROWS }) => {
  const columnNames = columns.map(({ name }) => name);
  return (
    <table>
      <thead>
        <tr>
          {columns.map((element) => {
            const value = Object.values(element);
            return <td key={value[0]}>{value[1]}</td>;
          })}
        </tr>
      </thead>
      <tbody>
        {rows.map((elementRow: any) => {
          return (
            <tr key={elementRow.id}>
              {columnNames.map((element) => {
                return (
                  <td key={element}>
                    {elementRow[element] === undefined
                      ? "-"
                      : elementRow[element]}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
