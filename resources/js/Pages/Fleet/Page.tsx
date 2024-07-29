export default function Page({ fleets }: any) {
    return (
        <div>
            <h1>test</h1>
            <p>
                {fleets.map((fleet: any) => (
                    <li key={fleet.fleet_id}>
                        {fleet.name}
                        {fleet.nomor}
                    </li>
                ))}
            </p>
        </div>
    );
}
