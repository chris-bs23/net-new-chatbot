import { PauseCircle, RefreshCw } from "lucide-react";

import { Button } from "../button";
import { ChatHandler } from "./chat.interface";

export default function ChatActions(
  props: Pick<ChatHandler, "stop" | "reload"> & {
    showReload?: boolean;
    showStop?: boolean;
  },
) {
  return (
    <div className="absolute right-14 bottom-1 chat-action">
      {props.showStop && (
        <Button variant="outline" size="sm" onClick={props.stop}>
          <PauseCircle className="md:mr-2 h-4 w-4" />
          <span className="hidden md:block">Stopp generering</span>
        </Button>
      )}
      {props.showReload && (
        <Button variant="outline" size="sm" onClick={props.reload}>
          <RefreshCw className="md:mr-2 h-4 w-4" />
          <span className="hidden md:block">Regenerer</span>
        </Button>
      )}
    </div>
  );
}
