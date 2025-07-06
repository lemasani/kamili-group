import { withPageTransition } from "@/components/PageTransitions/TransitionWrapper";
import TeamSection from "@/components/Sections/TeamSection";
import { teamMembers } from "@/data/teamData";


function TeamBlock() {
  return (
    <>
        <TeamSection teamMembers={teamMembers} showHeader={true} />
    </>
  )
}

const TeamPage = withPageTransition(TeamBlock);

export default TeamPage


