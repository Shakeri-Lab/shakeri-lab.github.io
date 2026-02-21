import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { team } from "@/data/team";

export function TeamCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-base">Team</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <h3 className="text-sm font-semibold text-[var(--muted-strong)]">Principal Investigator</h3>
            <Link
              href={team.pi.link}
              className="text-sm text-[var(--link)] hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              {team.pi.name}
            </Link>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-[var(--muted-strong)]">Current Members</h3>
            <ul className="space-y-2">
              {team.currentMembers.map((member, index) => (
                <li key={index} className="text-sm text-[var(--muted)]">
                  {member.link ? (
                    <Link
                      href={member.link}
                      className="text-[var(--link)] hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {member.name}
                    </Link>
                  ) : (
                    member.name
                  )} - {member.title}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-[var(--muted-strong)]">Alumni</h3>
            <ul className="space-y-2">
              {team.alumni.map((member, index) => (
                <li key={index} className="text-sm text-[var(--muted)]">
                  {member.link ? (
                    <Link
                      href={member.link}
                      className="text-[var(--link)] hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {member.name}
                    </Link>
                  ) : (
                    member.name
                  )} - {member.title}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
