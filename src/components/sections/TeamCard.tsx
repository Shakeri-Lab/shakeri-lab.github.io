import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { team } from "@/data/team";

export function TeamCard() {
  return (
    <Card className="dark:bg-gray-800 dark:border-gray-700">
      <CardHeader>
        <CardTitle className="text-base dark:text-white">Team</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold text-sm text-zinc-700 dark:text-zinc-300">Principal Investigator</h3>
            <Link
              href={team.pi.link}
              className="text-sm text-primary hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              {team.pi.name}
            </Link>
          </div>
          <div>
            <h3 className="font-semibold text-sm text-zinc-700 dark:text-zinc-300">Current Members</h3>
            <ul className="space-y-2">
              {team.currentMembers.map((member, index) => (
                <li key={index} className="text-sm dark:text-gray-300">
                  {member.link ? (
                    <Link
                      href={member.link}
                      className="text-primary hover:underline"
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
            <h3 className="font-semibold text-sm text-zinc-700 dark:text-zinc-300">Alumni</h3>
            <ul className="space-y-2">
              {team.alumni.map((member, index) => (
                <li key={index} className="text-sm dark:text-gray-300">
                  {member.link ? (
                    <Link
                      href={member.link}
                      className="text-primary hover:underline"
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
