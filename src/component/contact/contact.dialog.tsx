"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import axios from "axios";
import { useRef, useState } from "react";
import toast from "react-hot-toast";

export function ContactDialog() {
  const [loader, setloader] = useState(false);
  const senderRef = useRef(null);
  const messageRef = useRef(null);

  const Send = async () => {
    const sender = senderRef?.current?.value;
    const message = messageRef?.current?.value;
    if (!sender || !message) {
      toast.error("Fill all fields");
    }
    setloader(true);
    try {
      const res = await axios.post("/api/send", { sender, message });
      console.log(res.data);
      if (res.data.success) {
        toast.success(res.data.message);
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Failed to send message");
    } finally {
      setloader(false);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild className=" flex w-full justify-center">
        <Button
          className=" w-28  bg-[2e2e30] bg-accent text-white"
          variant="outline"
        >
          Send Message
        </Button>
      </DialogTrigger>
      <DialogContent className="text-black dark:text-white  sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Send Message</DialogTitle>
          {/* <DialogDescription>
            Make changes to your profile here. Click save when {"you're"} done.
          </DialogDescription> */}
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right capitalize">
              your email
            </Label>
            <Input ref={senderRef} className="col-span-3" />
          </div>
          <div className="grid w-full grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Message
            </Label>
            {/* <Input ref={messageRef} className="col-span-3" /> */}
            <Textarea className=" w-[17rem]" />
          </div>
        </div>
        <DialogFooter>
          <Button
            onClick={Send}
            type="submit"
            className=" border-slate-400 bg-accent text-white"
            // variant="default"
          >
            {loader ? (
              <span className=" h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent"></span>
            ) : (
              "Send"
            )}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
