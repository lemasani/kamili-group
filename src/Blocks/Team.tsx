import TeamSection from "@/components/Sections/TeamSection";
import { teamMembers } from "@/data/teamData";

function TeamBlock() {
  return (
    <>
      <TeamSection teamMembers={teamMembers} showHeader={true} />
    </>
  );
}

export default TeamBlock;
