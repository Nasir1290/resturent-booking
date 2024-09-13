import React from "react";
import useAuth from "../../hooks/useAuth";
import Loading from "../../components/general/Loading";

export default function Home() {
  const { user, loading } = useAuth();
  console.log({ user });
  if (loading) {
    return <Loading />;
  }
  return <div>Home</div>;
}
