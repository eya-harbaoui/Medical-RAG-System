"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@radix-ui/react-label";
import { Database, RefreshCcw, MoveUp, LucideLoader2 } from "lucide-react";
import React, { useState } from "react";
import useUpload from "../hooks/useUpload";
type Props = {};

const VectorDBPage = (props: Props) => {
  const [isUploading, setIsUploading] = useState(true);
  const [indexName, setIndexName] = useState("");
  const [namespace, setNamespace] = useState("");
  const { loading, error, success, upload } = useUpload({
    indexName: "yourIndexName",
    namespace: "yourNamespace",
  });
  const onStartUpload = () => {
    upload();
  };
  return (
    <main className="flex flex-col items-center p-24">
      <Card>
        <CardHeader>
          <CardTitle className="text-xl font-bold text-perso-red">
            Update Knowledge base
          </CardTitle>
          <CardDescription className="text-base font-base text-perso-blue">
            Add new documents to your vector DB
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-3 gap-4">
            <div className="col-span-2 grid gap-4 border rounded-lg p-6">
              <div className="gap-4 relative">
                <Button
                  variant={"ghost"}
                  className="absolute -right-4 -top-4 text-perso-red hover:bg-transparent"
                >
                  <RefreshCcw style={{ width: "20px", height: "20px" }} />
                </Button>
                <Label className="text-perso-blue font-semibold text-sm">
                  File list
                </Label>
                <Textarea
                  readOnly
                  className="min-h-24 resize-none border p-3 shadow-none disabled:cursor-default focus-visible:ring-0 text-sm text-muted-foreground"
                ></Textarea>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label className="text-perso-blue font-semibold text-sm">
                    Index name
                  </Label>
                  <Input
                    placeholder="Index name"
                    disabled={isUploading}
                    className="disabled:cursor-default"
                    value={indexName}
                    onChange={(e) => {
                      setIndexName(e.target.value);
                    }}
                  ></Input>
                </div>
                <div className="grid gap-2">
                  <Label className="text-perso-blue font-semibold text-sm">
                    Namespace
                  </Label>
                  <Input
                    placeholder="Namespace"
                    disabled={isUploading}
                    className="disabled:cursor-default"
                    value={namespace}
                    onChange={(e) => {
                      setNamespace(e.target.value);
                    }}
                  ></Input>
                </div>
              </div>
            </div>

            <div>
              {" "}
              <Button
                variant={"outline"}
                className="w-full h-full"
                disabled={isUploading}
                onClick={onStartUpload}
              >
                <span className="flex flex-row">
                  <Database
                    style={{ width: "50px", height: "50px" }}
                    className="text-perso-red"
                  />
                  <MoveUp
                    className="text-perso-red"
                    style={{ width: "20px", height: "20px" }}
                  />
                </span>
              </Button>
            </div>
          </div>
          {isUploading && (
            <div className="mt-7">
              <div>
                <Label className="text-perso-blue font-semibold text-sm">
                  File Name :{" "}
                </Label>
              </div>

              <div className="flex flex-row items-center gap-4">
                <Progress
                  value={60}
                  indicatorClassName={"bg-perso-blue-2"}
                ></Progress>
                <LucideLoader2
                  style={{ width: "20px", height: "20px" }}
                  className="text-perso-red animate-spin"
                />
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </main>
  );
};

export default VectorDBPage;
