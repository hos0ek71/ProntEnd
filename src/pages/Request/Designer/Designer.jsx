import React from "react";
import Profile from "./ui/Profile";
import Search from "./ui/Search";
import styled from "styled-components";
import { RequestLayOut } from "../Request/Request";
import ContentHeader from "../ui/ContentHeader";


const Sidebar = styled.div`
flex : 0.5;
`;
const Content = styled.div`
width: 80%;
display:flex;
flex-wrap: wrap;
justify-content: center;
border: 2px solid;
border-radius: 10px;
`;
export default function Designer() {
  return (
    <>
<ContentHeader children="디자이너 찾기"/>
<RequestLayOut>
<Sidebar>
  <Search/>
</Sidebar>
<Content>
<Profile/>
<Profile/>
<Profile/>
<Profile/>
<Profile/>
<Profile/>
<Profile/>
<Profile/>
<Profile/>
<Profile/>
<Profile/>
<Profile/>
<Profile/>
</Content>

</RequestLayOut>

    </>

  );
}
