import React from 'react';
import styled from 'styled-components';
import ProfileCard from './ProfileCard';
import TeamTitle from './TeamTitle';
import NewTeamMembers from './Team_new_Details';

const Departments = [
    'GDSC Lead',
    'Event Management Team',
    'Marketing Team',
    'Technical Team',
    'Creative Team',
    'Public Relations Team'
];

let R1 = 0, R2 = 1, R3 = 4;
function Increment_Row() {
    R1 += 6;
    R3 += 6;
    R2 += 6;
}

function Row_1() {
    return (
        <Row>
            {
                NewTeamMembers.map((Person, index) => (
                    index === R1
                    &&
                    <ProfileCard Person={Person} key={index} />
                ))
            }
        </Row>
    )
}

function Row_2() {
    return (
        <Row>
            {
                NewTeamMembers.map((Person, index) => (
                    (index >= R2 && index <= (R2 + 2))
                    &&
                    <>
                        <ProfileCard Person={Person} key={index} />
                    </>
                ))
            }
        </Row>
    )
}
function Row_3() {
    return (
        <Row>
            {
                NewTeamMembers.map((Person, index) => (
                    (index >= R3 && index <= (R3 + 1))
                    &&
                    <>
                        <ProfileCard Person={Person} key={index} />
                    </>
                ))
            }
        </Row>
    )
}

function Team_new() {
    R1 = 0;
    R2 = 1;
    R3 = 4;
    return (
        <Container>
            {
                Departments.map((item, i) =>
                (
                    <div key={i}>
                        <TeamTitle TeamName={item} color="#4285F4" />
                        <TeamContainer>
                            {
                                Row_1()
                            }
                            {
                                Row_2()
                            }
                            {
                                Row_3()
                            }
                        </TeamContainer>
                        {Increment_Row()}
                    </div>
                ))
            }
        </Container>
    );
}

export default Team_new;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: white;
`;
const TeamContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-bottom: 10px;
`;
const Row = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    @media (max-width: 756px)
    {
        flex-direction: column;
    }
`;
