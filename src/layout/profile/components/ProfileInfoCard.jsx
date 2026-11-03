import { MdEdit } from "react-icons/md";
import { profileInfo } from "../data/profileInfoData";

const ProfileInfoCard = () => {
  const { description, details, social } = profileInfo;

  return (
    <div>
      <div className="flex items-center justify-between">
        <h2 className="font-bold text-gray-700">Profile Information</h2>
        <button aria-label="Edit profile" className="text-gray-500">
          <MdEdit />
        </button>
      </div>

      <p className="text-sm text-gray-400 mt-4 leading-6">{description}</p>
      <hr className="my-5 border-gray-100" />

      <dl className="space-y-4 text-sm">
        {details.map(({ label, value }) => (
          <div key={label} className="flex gap-3 flex-wrap">
            <dt className="font-bold text-gray-700">{label}:</dt>
            <dd className="text-gray-500">{value}</dd>
          </div>
        ))}

        <div className="flex items-center gap-4">
          <dt className="font-bold text-gray-700">Social:</dt>
          <dd className="flex gap-4 text-lg">
            {social.map(({ id, name, icon: Icon, color, url }) => (
              <a key={id} href={url} aria-label={name} className={color}>
                <Icon />
              </a>
            ))}
          </dd>
        </div>
      </dl>
    </div>
  );
};

export default ProfileInfoCard;