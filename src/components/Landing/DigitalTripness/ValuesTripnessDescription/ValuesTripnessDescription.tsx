interface ValuesTripnessProps {
  description: string;
}

export function ValuesTripnessDescription(props: ValuesTripnessProps) {
  return (
    <div className="flex justify-center mt-8">
      <p className="w-7/12 text-2xl leading-7 font-normal text-B10">{props.description}</p>
    </div>
  );
}