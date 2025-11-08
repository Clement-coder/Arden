"use client"

import { Modal } from "./modal"
import { Campaign, Task } from "@/types/campaign"
import { formatEther } from "viem"
import { Separator } from "./ui/separator"
import { Progress } from "./ui/progress"
import { CheckCircle2, Circle } from "lucide-react"

interface DiscoverCampaignDetailsModalProps {
  isOpen: boolean
  onClose: () => void
  campaign: Campaign | null
}

export function DiscoverCampaignDetailsModal({ isOpen, onClose, campaign }: DiscoverCampaignDetailsModalProps) {
  if (!campaign) {
    return null
  }

  const progress = (Number(campaign.currentAmount) / Number(campaign.targetAmount)) * 100

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={campaign.title}>
      <div className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold">Description</h3>
          <p className="text-muted-foreground">{campaign.description}</p>
        </div>

        <Separator />

        <div>
          <h3 className="text-lg font-semibold">Details</h3>
          <p>
            <span className="font-medium">Owner:</span> {campaign.owner}
          </p>
          <p>
            <span className="font-medium">Target Amount:</span> {formatEther(BigInt(campaign.targetAmount))} ETH
          </p>
          <p>
            <span className="font-medium">Current Amount:</span> {formatEther(BigInt(campaign.currentAmount))} ETH
          </p>
          <p>
            <span className="font-medium">Deadline:</span> {new Date(campaign.deadline).toLocaleDateString()}
          </p>
          <p>
            <span className="font-medium">Backers:</span> {campaign.backers}
          </p>
        </div>

        <Separator />

        <div>
          <h3 className="text-lg font-semibold">Funding Progress</h3>
          <Progress value={progress} className="w-full" />
          <p className="text-sm text-muted-foreground mt-2">
            {progress.toFixed(2)}% of target reached
          </p>
        </div>

        <Separator />

        <div>
          <h3 className="text-lg font-semibold">Tasks</h3>
          {campaign.tasks && campaign.tasks.length > 0 ? (
            <ul className="space-y-2">
              {campaign.tasks.map((task: Task) => (
                <li key={task.id} className="flex items-center gap-2">
                  {task.completed ? (
                    <CheckCircle2 className="text-green-500" size={20} />
                  ) : (
                    <Circle className="text-muted-foreground" size={20} />
                  )}
                  <span>{task.title}</span>
                  <span className="text-muted-foreground text-sm">- {task.description}</span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-muted-foreground">No tasks defined for this campaign.</p>
          )}
        </div>
      </div>
    </Modal>
  )
}
