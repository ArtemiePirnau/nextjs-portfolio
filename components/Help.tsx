import { Button } from "@/components/ui/button";
import Link from "next/link";
export default function Help() {
  return (
    <div className="help mb-60">
      <h3 className="help__title text-5xl mb-20 leading-[56px] font-bold text-center w-[800px] mx-auto">
        Prepared to turn ideas into reality? I am here to help
      </h3>
      <Link className="help__link block text-center" href="/contacts">
        <Button>Contact me</Button>
      </Link>
    </div>
  );
}
