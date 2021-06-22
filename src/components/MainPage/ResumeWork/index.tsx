import { useEffect } from "react";
import { useState } from "react";
import { FC } from "react";
import styled from "styled-components";
import ResumeWorkHeader from "./ResumeWorkHeader";
import ResumeWorkList from "./ResumeWorkList";
import ResumeWorkListFooter from "./ResumeWorkListFooter";

const Wrapper = styled.div`
  margin-top: 10px;
  width: 91%;
`;
export interface IWorkList {
  name: string;
}

const workListMocked: IWorkList[] = [
  { name: "Contract 222" },
  { name: "Contract 333" },
  { name: "Contract 444" },
];

const ResumeWork = () => {
  const [workList, setWorkList] = useState<IWorkList[]>(workListMocked);
  const [input, setInput] = useState("");

  useEffect(() => {
    if (input != "") {
      setWorkList(
        workListMocked.filter((work) =>
          work.name.toLowerCase().includes(input.toLowerCase())
        )
      );
    }
  }, [input]);

  return (
    <Wrapper>
      <ResumeWorkHeader input={input} setInput={setInput} />
      <ResumeWorkList workList={workList} />
      <ResumeWorkListFooter />
    </Wrapper>
  );
};

export default ResumeWork;
